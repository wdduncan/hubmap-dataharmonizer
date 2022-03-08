var DATA = [
  {
    "fieldName": "Identifer",
    "children": [
      {
        "fieldName": "Sample ID",
        "capitalize": "",
        "ontology_id": "hive:0000001",
        "datatype": "xs:unique",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "A unique value that identifies the sample.",
        "guidance": "",
        "examples": ""
      }
    ]
  },
  {
    "fieldName": "Experiment Metadata",
    "children": [
      {
        "fieldName": "Project",
        "capitalize": "",
        "ontology_id": "hive:0000003",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The project that sample was collected for.",
        "guidance": "",
        "examples": "KPMP, BUKMAP",
        "schema:ItemList": {
          "KPMP": {
            "ontology_id": "hive:0000011"
          },
          "BUKMAP": {
            "ontology_id": "hive:0000012"
          }
        }
      },
      {
        "fieldName": "Experiment Name",
        "capitalize": "",
        "ontology_id": "hive:0000004",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the experiment.",
        "guidance": "Depending on the project, expirements are named according to the formats \"KPMP_[Date][A-Z]_[assay code]\" or \"BUKMAP_[Date][A-Z]_[assay code]\"",
        "examples": "KPMP_20210917B_10X-Dual-R, BUKMAP_20210917B_10X-Dual-AC"
      },
      {
        "fieldName": "Experiment Status",
        "capitalize": "",
        "ontology_id": "hive:0000005",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The status of the expiremnt.",
        "guidance": "",
        "examples": "S0 (nuclei), S1 (cDNA), S3 (NGS ongoing), S4 (fastq), S5 (Analysis), S6 (Deposited), GO",
        "schema:ItemList": {
          "S0 (nuclei)": {
            "ontology_id": "hive:0000014"
          },
          "S1 (cDNA)": {
            "ontology_id": "hive:0000015"
          },
          "S3 (NGS ongoing)": {
            "ontology_id": "hive:0000016"
          },
          "S4 (fastq)": {
            "ontology_id": "hive:0000017"
          },
          "S5 (Analysis)": {
            "ontology_id": "hive:0000018"
          },
          "S6 (Deposited)": {
            "ontology_id": "hive:0000019"
          },
          "GO": {
            "ontology_id": "hive:0000020"
          }
        }
      }
    ]
  },
  {
    "fieldName": "Sample Metadata",
    "children": [
      {
        "fieldName": "Sample Type",
        "capitalize": "UPPER",
        "ontology_id": "hive:0000007",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "",
        "guidance": "",
        "examples": ""
      },
      {
        "fieldName": "Cryosectioning Date",
        "capitalize": "",
        "ontology_id": "hive:0000008",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "",
        "guidance": "",
        "examples": ""
      },
      {
        "fieldName": "Cryosection Size (um)",
        "capitalize": "",
        "ontology_id": "hive:0000009",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "",
        "guidance": "",
        "examples": ""
      },
      {
        "fieldName": "Operator",
        "capitalize": "",
        "ontology_id": "hive:0000010",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The person who conducted the assay.",
        "guidance": "",
        "examples": ""
      }
    ]
  }
]