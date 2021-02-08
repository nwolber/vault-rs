#!/bin/bash
set -eux

VAULT_VERSION=${VAULT_VERSION:-1.6.2}

mkdir -p $HOME/bin

cd /tmp

curl -sOL https://releases.hashicorp.com/vault/${VAULT_VERSION}/vault_${VAULT_VERSION}_linux_amd64.zip
unzip vault_${VAULT_VERSION}_linux_amd64.zip
mv vault $HOME/bin
