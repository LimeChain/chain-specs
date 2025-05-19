type Specification = {
  chainspec_version: 1;
  network: string;
  chain_id: number;
  description?: string;
  forks: {
    metadata: {
      name: string;
      block: number;
    };
    opcodes?: {
      [opcode: string]: {
        name: string;
        description: string;
      };
    };
    precompiles?: {
      [precompile_address: string]: {
        name: string;
        description: string;
      };
    };
    system_contracts?: {
      [system_contract_address: string]: {
        name: string;
        description: string;
        url: string;
      };
    };
  }[];
};
