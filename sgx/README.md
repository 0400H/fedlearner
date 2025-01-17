# FL on SGX

FL on SGX is a privacy-preserving federated machine learning framework. In this work, we implement remote attestation on GRPC and mbedTLS, and migrate Fedlearner (including Tensorflow) by LibOS to Intel SGX almost seamlessly.

# Build docker image

## Update etc

1. set PCCS_URL in `configs/etc/sgx_default_qcnl.conf` 
2. set proxy_server in `build_dev_docker_image.sh` and `build_release_docker_image.sh`

## Build

- Develop version

    ```
    image_tag=latest
    ./build_dev_docker_image.sh ${image_tag}
    ```

- Release version

    ```
    image_tag=latest
    base_image=fedlearner-sgx-dev:latest
    ./build_release_docker_image.sh ${image_tag} ${base_image}
    ```

# Run in container

## Test

```
cd ${gramine}/CI-Examples/mnist
test-ps-sgx.sh data
test-ps-sgx.sh make

test-ps-sgx.sh leader
```

Open another terminal and execute
```
test-ps-sgx.sh follower 
```

# Unsupported features

* tensorflow-io, used by fedlearner but not provided, mocked by `sgx/gramine/CI-Examples/tenorflow_io.py`
