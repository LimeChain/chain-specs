# Chain specifications
Unified chain specifications of the Execution Environments of networks.

The spec contains all opcodes, precompiles and system contracts that the chain supports as well as information about when they were added.

## Supported chains

There are specifications for the following EVM chains:
1. [Ethereum](./specifications/ethereum.json)
2. [Kakarot](./specifications/kakarot.json)
3. [Ink](./specifications/ink.json)

## Add a chain specification

Fork the repo and add your spec in the [specifications](./specifications/) folder. You can use the [Ethereum](./specifications/ethereum.json) one as an example.

There is a [TypeScript definition file](./spec.d.ts) that your spec has to be compatible with.
