export type Frontier = {
  "version": "0.1.0",
  "name": "frontier",
  "instructions": [
    {
      "name": "initPlayerAccounts",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "armyAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "army",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "publicKey"
          },
          {
            "name": "unitCount",
            "type": "u32"
          },
          {
            "name": "armySize",
            "type": "u32"
          },
          {
            "name": "rating",
            "type": "u32"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "playerBase",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "publicKey"
          },
          {
            "name": "structureCount",
            "type": "u32"
          },
          {
            "name": "baseSize",
            "type": "u32"
          },
          {
            "name": "rating",
            "type": "u32"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ownerPubkey",
            "type": "publicKey"
          },
          {
            "name": "rank",
            "type": "u8"
          },
          {
            "name": "experience",
            "type": "u32"
          },
          {
            "name": "resources",
            "type": {
              "defined": "Resources"
            }
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Resources",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wood",
            "type": "u32"
          },
          {
            "name": "stone",
            "type": "u32"
          },
          {
            "name": "iron",
            "type": "u32"
          },
          {
            "name": "steel",
            "type": "u32"
          },
          {
            "name": "mana",
            "type": "u32"
          },
          {
            "name": "gold",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "BaseError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AlreadyInitialized"
          },
          {
            "name": "NotInitialized"
          }
        ]
      }
    },
    {
      "name": "ArmyError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AlreadyInitialized"
          },
          {
            "name": "NotInitialized"
          }
        ]
      }
    },
    {
      "name": "GameMatchError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AlreadyInitialized"
          },
          {
            "name": "NotInitialized"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized"
    },
    {
      "code": 6001,
      "name": "NotInitialized"
    }
  ]
};

export const IDL: Frontier = {
  "version": "0.1.0",
  "name": "frontier",
  "instructions": [
    {
      "name": "initPlayerAccounts",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "playerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "armyAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "army",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "publicKey"
          },
          {
            "name": "unitCount",
            "type": "u32"
          },
          {
            "name": "armySize",
            "type": "u32"
          },
          {
            "name": "rating",
            "type": "u32"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "playerBase",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "type": "publicKey"
          },
          {
            "name": "structureCount",
            "type": "u32"
          },
          {
            "name": "baseSize",
            "type": "u32"
          },
          {
            "name": "rating",
            "type": "u32"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ownerPubkey",
            "type": "publicKey"
          },
          {
            "name": "rank",
            "type": "u8"
          },
          {
            "name": "experience",
            "type": "u32"
          },
          {
            "name": "resources",
            "type": {
              "defined": "Resources"
            }
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Resources",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wood",
            "type": "u32"
          },
          {
            "name": "stone",
            "type": "u32"
          },
          {
            "name": "iron",
            "type": "u32"
          },
          {
            "name": "steel",
            "type": "u32"
          },
          {
            "name": "mana",
            "type": "u32"
          },
          {
            "name": "gold",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "BaseError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AlreadyInitialized"
          },
          {
            "name": "NotInitialized"
          }
        ]
      }
    },
    {
      "name": "ArmyError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AlreadyInitialized"
          },
          {
            "name": "NotInitialized"
          }
        ]
      }
    },
    {
      "name": "GameMatchError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AlreadyInitialized"
          },
          {
            "name": "NotInitialized"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized"
    },
    {
      "code": 6001,
      "name": "NotInitialized"
    }
  ]
};