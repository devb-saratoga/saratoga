/**
 * zillow to fnm
 */

function zillowtofnm() {
	obj = {
			  "SearchResults:searchresults": {
				    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
				    "-xmlns:SearchResults": "http://www.zillow.com/static/xsd/SearchResults.xsd",
				    "-xsi:schemaLocation": "http://www.zillow.com/static/xsd/SearchResults.xsd http://www.zillowstatic.com/vstatic/41c25c3/static/xsd/SearchResults.xsd",
				    "request": {
				      "address": "63 lake shore drive",
				      "citystatezip": "Sparta NJ"
				    },
				    "message": {
				      "text": "Request successfully processed",
				      "code": "0"
				    },
				    "response": {
				      "results": {
				        "result": [
				          {
				            "zpid": "39948775",
				            "links": {
				              "homedetails": "http://www.zillow.com/homedetails/63-Lake-Shore-Dr-Sparta-NJ-07871/39948775_zpid/",
				              "graphsanddata": "http://www.zillow.com/homedetails/63-Lake-Shore-Dr-Sparta-NJ-07871/39948775_zpid/#charts-and-data",
				              "mapthishome": "http://www.zillow.com/homes/39948775_zpid/",
				              "comparables": "http://www.zillow.com/homes/comps/39948775_zpid/"
				            },
				            "address": {
				              "street": "63 Lake Shore Dr",
				              "zipcode": "07871",
				              "city": "Sparta",
				              "state": "NJ",
				              "latitude": "40.922439",
				              "longitude": "-74.518936"
				            },
				            "zestimate": {
				              "amount": {
				                "-currency": "USD",
				                "#text": "168592"
				              },
				              "last-updated": "08/21/2017",
				              "oneWeekChange": { "-deprecated": "true" },
				              "valueChange": {
				                "-duration": "30",
				                "-currency": "USD",
				                "#text": "13419"
				              },
				              "valuationRange": {
				                "low": {
				                  "-currency": "USD",
				                  "#text": "153419"
				                },
				                "high": {
				                  "-currency": "USD",
				                  "#text": "187137"
				                }
				              },
				              "percentile": "0"
				            },
				            "localRealEstate": {
				              "region": {
				                "-name": "Rockaway Township",
				                "-id": "396484",
				                "-type": "city",
				                "zindexValue": "322,100",
				                "links": {
				                  "overview": "http://www.zillow.com/local-info/NJ-Rockaway-Township/r_396484/",
				                  "forSaleByOwner": "http://www.zillow.com/rockaway-township-nj/fsbo/",
				                  "forSale": "http://www.zillow.com/rockaway-township-nj/"
				                }
				              }
				            }
				          },
				          {
				            "zpid": "2113211276",
				            "links": {
				              "homedetails": "http://www.zillow.com/homedetails/63-Lake-Shore-Dr-Sparta-NJ-07871/2113211276_zpid/",
				              "mapthishome": "http://www.zillow.com/homes/2113211276_zpid/",
				              "comparables": "http://www.zillow.com/homes/comps/2113211276_zpid/"
				            },
				            "address": {
				              "street": "63 Lake Shore Dr",
				              "zipcode": "07871",
				              "city": "Sparta",
				              "state": "NJ",
				              "latitude": "40.922439",
				              "longitude": "-74.518936"
				            },
				            "zestimate": {
				              "amount": {
				                "-currency": "USD",
				                "#text": "297175"
				              },
				              "last-updated": "08/21/2017",
				              "oneWeekChange": { "-deprecated": "true" },
				              "valueChange": {
				                "-duration": "30",
				                "-currency": "USD",
				                "#text": "6461"
				              },
				              "valuationRange": {
				                "low": {
				                  "-currency": "USD",
				                  "#text": "243684"
				                },
				                "high": {
				                  "-currency": "USD",
				                  "#text": "353638"
				                }
				              },
				              "percentile": "0"
				            },
				            "localRealEstate": {
				              "region": {
				                "-name": "Rockaway Township",
				                "-id": "396484",
				                "-type": "city",
				                "zindexValue": "322,100",
				                "links": {
				                  "overview": "http://www.zillow.com/local-info/NJ-Rockaway-Township/r_396484/",
				                  "forSaleByOwner": "http://www.zillow.com/rockaway-township-nj/fsbo/",
				                  "forSale": "http://www.zillow.com/rockaway-township-nj/"
				                }
				              }
				            }
				          }
				        ]
				      }
				    }
				  }
				};
	
	objnew = {
	        "PROPERTY": {
	            "ADDRESS": {
	              "AddressLineText": "",
	              "CityName": "",
	              "PostalCode": "",
	              "StateCode": ""
	            },
	            "FLOOD_DETERMINATION": {
	              "FLOOD_DETERMINATION_DETAIL": 
	              { "SpecialFloodHazardAreaIndicator": "false" }
	            },
	            "PROJECT": {
	              "PROJECT_DETAIL": {
	                "ProjectClassificationIdentifier": "G",
	                "PUDIndicator": "false"
	              }
	            },
	            "PROPERTY_DETAIL": {
	              "AttachmentType": "Detached",
	              "ConstructionMethodType": "SiteBuilt",
	              "FinancedUnitCount": "1",
	              "PropertyEstateType": "FeeSimple",
	              "PropertyFloodInsuranceIndicator": "false",
	              "PropertyStructureBuiltYear": "1998",
	              "PropertyUsageType": "PrimaryResidence"
	            },
	            "PROPERTY_VALUATIONS": {
	              "PROPERTY_VALUATION": {
	                "PROPERTY_VALUATION_DETAIL": {
	                  "PropertyValuationAmount": "200000",
	                  "PropertyValuationMethodType": "None"
	                }
	              }
	            }
	          }
	  };
    for (var key in obj) {
    	if (key == "street")
	      objnew["AddressLineText"] = obj[key];
	}
    console.log(objnew);
}