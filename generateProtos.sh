#!/bin/bash
# This script is used to build the protocol buffers for the Staking client library.
# It outputs the generated protos to ../src/generated.
# It assumes that the following dependencies are installed:
# protoc, protoc-gen-grpc-web, https://github.com/einride/protoc-gen-typescript-http

set -euo pipefail;

# Determine the directory that this script is in, and cd into it.
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]:-$0}"; )" &> /dev/null && pwd 2> /dev/null; )";
cd $SCRIPT_DIR

# Remove any existing generated protos.
echo "0. Removing existing generated protos..."
GENERATED_PROTOS_DIR=$SCRIPT_DIR/src/generated
rm -rf $GENERATED_PROTOS_DIR
mkdir $GENERATED_PROTOS_DIR
mkdir $GENERATED_PROTOS_DIR/common
mkdir $GENERATED_PROTOS_DIR/api
mkdir $GENERATED_PROTOS_DIR/workflow
mkdir $GENERATED_PROTOS_DIR/validator
mkdir $GENERATED_PROTOS_DIR/staking_context
mkdir $GENERATED_PROTOS_DIR/action
mkdir $GENERATED_PROTOS_DIR/ethereum_kiln
mkdir $GENERATED_PROTOS_DIR/polygon
mkdir $GENERATED_PROTOS_DIR/protocol
mkdir $GENERATED_PROTOS_DIR/network
mkdir $GENERATED_PROTOS_DIR/solana

# Create a temporary directory to clone the Staking Client Library repo into.
TEMP_DIR=$(mktemp -d)

echo "1. Cloning Staking Client Library repo and dependencies into temporary directory..."
# Clone the Staking Client Library repo, as well as its dependencies, into the temporary directory.
(cd $TEMP_DIR && \
    git clone -q --depth 1 git@github.cbhq.net:cloud/staking-client-library-go.git && \
    git clone -q --depth 1 --branch master https://github.com/googleapis/googleapis.git && \
git clone -q --depth 1 --branch main https://github.com/grpc-ecosystem/grpc-gateway.git)

# Define the paths to the protos that we want to compile.
STAKING_PROTOS_DIR=$TEMP_DIR/staking-client-library-go/protos
GOOG_PROTOS_DIR=$TEMP_DIR/googleapis/google
GOOG_PROTOS="$GOOG_PROTOS_DIR/longrunning/operations.proto $GOOG_PROTOS_DIR/api/annotations.proto $GOOG_PROTOS_DIR/api/client.proto $GOOG_PROTOS_DIR/api/field_behavior.proto $GOOG_PROTOS_DIR/api/resource.proto $GOOG_PROTOS_DIR/api/http.proto $GOOG_PROTOS_DIR/api/launch_stage.proto $GOOG_PROTOS_DIR/rpc/status.proto"
GRPC_GW_DIR=$TEMP_DIR/grpc-gateway

echo "2. Compiling Staking service protos..."
# Define a function for compiling Staking service protos.
function compileStakingProto() {
    # Generate typescript-http clients.
    protoc -I=$STAKING_PROTOS_DIR -I $TEMP_DIR/googleapis -I $TEMP_DIR/grpc-gateway \
    --typescript-http_out $GENERATED_PROTOS_DIR/$2 $1
}

compileStakingProto coinbase/staking/v1alpha1/common.proto common
compileStakingProto coinbase/staking/v1alpha1/api.proto api
compileStakingProto coinbase/staking/v1alpha1/workflow.proto workflow
compileStakingProto coinbase/staking/v1alpha1/validator.proto validator
compileStakingProto coinbase/staking/v1alpha1/staking_context.proto staking_context
compileStakingProto coinbase/staking/v1alpha1/action.proto action
compileStakingProto coinbase/staking/v1alpha1/ethereum_kiln.proto ethereum_kiln
compileStakingProto coinbase/staking/v1alpha1/polygon.proto polygon
compileStakingProto coinbase/staking/v1alpha1/protocol.proto protocol
compileStakingProto coinbase/staking/v1alpha1/network.proto network
compileStakingProto coinbase/staking/v1alpha1/solana.proto solana

echo "Compiled protocol buffers. See $GENERATED_PROTOS_DIR"