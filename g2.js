[
    {
        "version": "1.0",
        "defaultScreenplayId": "SCP1",
        "screenplayProviderId": "screenplayProvider",
        "data": {
            "narrativeData": {
                "guid": "e3ced195-0c8b-48f6-b42c-f989e52b4f03",
                "timestamp": "2013-07-05T21:25:49.751Z",
                "title": "TAGAuthoringPreview",
                "author": "TAG Authoring Tool",
                "aspectRatio": "WideScreen",
                "estimatedDuration": 160,
                "description": "TAG Tour",
                "branding": "TAG"
            }
        },
        "providers": {
            "ZMES": {
                "name": "MicrosoftResearch.Rin.ZoomableMediaExperienceStream",
                "version": "1.0"
            },
            "AES": {
                "name": "MicrosoftResearch.Rin.AudioExperienceStream",
                "version": "1.0"
            },
            "screenplayProvider": {
                "name": "MicrosoftResearch.Rin.DefaultScreenplayProvider",
                "version": "1.0"
            },
            "FadeInOutTransitionService": {
                "name": "MicrosoftResearch.Rin.FadeInOutTransitionService",
                "version": "1.0"
            },
            "InkES": {
                "name": "MicrosoftResearch.Rin.InkExperienceStream",
                "version": "0.0"
            },
            "VideoES": {
                "name": "MicrosoftResearch.Rin.VideoExperienceStream",
                "version": 0
            },
            "ImageES": {
                "name": "MicrosoftResearch.Rin.ImageExperienceStream",
                "version": "1.0"
            }
        },
        "resources": {
            "R-0": {
                "uriReference": "http://137.117.37.220:8086/Images/20130213194504/dz.xml"
            },
            "R-1": {
                "uriReference": 1
            },
            "R-2": {
                "uriReference": 1
            },
            "R-3": {
                "uriReference": 1
            },
            "R-4": {
                "uriReference": "http://137.117.37.220:8086/Images/20130629123915.png"
            },
            "R-5": {
                "uriReference": "http://137.117.37.220:8086/LargeFiles/garidz/dz.xml"
            },
            "R-6": {
                "uriReference": "http://137.117.37.220:8086/Images/20130228032811.mp3"
            }
        },
        "experiences": {
            "Garibaldi-0": {
                "data": {
                    "zIndex": 7,
                    "guid": "287a3e90-071e-4292-8c5b-2f9a01d0af1f"
                },
                "providerId": "ZMES",
                "resourceReferences": [
                    {
                        "resourceId": "R-0",
                        "required": "true"
                    }
                ],
                "experienceStreams": {
                    "Garibaldi-0-0": {
                        "duration": 5.571083314946925,
                        "data": {
                            "zIndex": 7,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi-0-0"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": -2.7726585406367863,
                                                "y": -2.8414555328580584
                                            },
                                            "span": {
                                                "x": 11.886058679955777,
                                                "y": 6.684734423482238
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.4132351370375176,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": -2.7726585406367863,
                                                "y": -2.8414555328580584
                                            },
                                            "span": {
                                                "x": 11.886058679955777,
                                                "y": 6.684734423482238
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 6.032653407474648,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": -0.20739537617453663,
                                                "y": 0.05848509777703892
                                            },
                                            "span": {
                                                "x": 2.637447281733477,
                                                "y": 1.4833036845136142
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            "thumbnail": {
                "data": {
                    "zIndex": 3
                },
                "providerId": "ImageES",
                "resourceReferences": [
                    {
                        "resourceId": "R-4",
                        "required": "true"
                    }
                ],
                "experienceStreams": {
                    "thumbnail-0": {
                        "duration": 2.135739202773434,
                        "data": {
                            "zIndex": 3,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            }
                        },
                        "header": {
                            "defaultKeyframeSequence": "thumbnail-0"
                        },
                        "keyframes": []
                    }
                }
            },
            "Garibaldi Panorama": {
                "data": {
                    "zIndex": 2,
                    "guid": "48880741-040a-4657-a3ef-0a2f9bbe27cd"
                },
                "providerId": "ZMES",
                "resourceReferences": [
                    {
                        "resourceId": "R-5",
                        "required": "true"
                    }
                ],
                "experienceStreams": {
                    "Garibaldi Panorama-0": {
                        "duration": 35.69434726665662,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-0"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": -0.13635423767132154,
                                                "y": -0.35168424706797957
                                            },
                                            "span": {
                                                "x": 1.25,
                                                "y": 0.7030015797788309
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 6.636414778411682,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": -0.13635423767132154,
                                                "y": -0.35168424706797957
                                            },
                                            "span": {
                                                "x": 1.25,
                                                "y": 0.7030015797788309
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 19.38082705772618,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.36866403103987943,
                                                "y": 0.0035697653513765644
                                            },
                                            "span": {
                                                "x": 0.025210083109301513,
                                                "y": 0.006089154188509675
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 28.80486414459539,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.3133426483265037,
                                                "y": -0.0013521160055988204
                                            },
                                            "span": {
                                                "x": 0.023975227699356713,
                                                "y": 0.013483698358563965
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 34.338831997239254,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.32294434559902135,
                                                "y": 0.0026846242670586283
                                            },
                                            "span": {
                                                "x": 0.012303916502879576,
                                                "y": 0.006919738191192937
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-1": {
                        "duration": 16.568884277343755,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.3
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-1"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.06185494938490497,
                                                "y": -0.0033796128627653276
                                            },
                                            "span": {
                                                "x": 0.0711252335133254,
                                                "y": 0.015002978944217078
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.7901267857710508,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.06185494938490497,
                                                "y": -0.0033796128627653276
                                            },
                                            "span": {
                                                "x": 0.0711252335133254,
                                                "y": 0.015002978944217078
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 7.462961284930898,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.008140964639160324,
                                                "y": 0.0036622211699467656
                                            },
                                            "span": {
                                                "x": 0.024244789260569815,
                                                "y": 0.0051141352346514455
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 13.57567599085958,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.0033820146282045916,
                                                "y": 0.001541768105907882
                                            },
                                            "span": {
                                                "x": 0.016327638675419635,
                                                "y": 0.009186709231087171
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-2": {
                        "duration": 7.730424609949935,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.29999999999999716,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-2"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9409156569133414,
                                                "y": -0.001126190816026362
                                            },
                                            "span": {
                                                "x": 0.025369663121999026,
                                                "y": 0.014274183978807962
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 1.0501924954927801,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9409156569133414,
                                                "y": -0.001126190816026362
                                            },
                                            "span": {
                                                "x": 0.025369663121999026,
                                                "y": 0.014274183978807962
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 6.958905029297007,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9535498907858126,
                                                "y": 0.00024004652769230982
                                            },
                                            "span": {
                                                "x": 0.019427898360501065,
                                                "y": 0.01093106338014008
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-3": {
                        "duration": 5.127435292504941,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-3"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.022301108955294774,
                                                "y": 0.0021905132689363305
                                            },
                                            "span": {
                                                "x": 0.01941377028386346,
                                                "y": 0.0072043288162774565
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.41327565880872185,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.022301108955294774,
                                                "y": 0.0021905132689363305
                                            },
                                            "span": {
                                                "x": 0.01941377028386346,
                                                "y": 0.0072043288162774565
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 5.514294197308267,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.035266713761109486,
                                                "y": 0.0027830348355426773
                                            },
                                            "span": {
                                                "x": 0.014139511287519481,
                                                "y": 0.0044830351543111895
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-4": {
                        "duration": 5.475934063946752,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-4"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.17358486424686087,
                                                "y": -0.0010563767681542593
                                            },
                                            "span": {
                                                "x": 0.03241354800325076,
                                                "y": 0.01306249102474754
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.5303908764185223,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.17358486424686087,
                                                "y": -0.0010563767681542593
                                            },
                                            "span": {
                                                "x": 0.03241354800325076,
                                                "y": 0.01306249102474754
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 5.302413375289348,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.1825401501611207,
                                                "y": 0.0026159505897274133
                                            },
                                            "span": {
                                                "x": 0.021501812755510673,
                                                "y": 0.0086651185518627
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-5": {
                        "duration": 10.842221860532404,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-5"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.2540987105374864,
                                                "y": -0.00015728685365191171
                                            },
                                            "span": {
                                                "x": 0.02770440882259798,
                                                "y": 0.011164732461711034
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 1.1142578125,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.2540987105374864,
                                                "y": -0.00015728685365191171
                                            },
                                            "span": {
                                                "x": 0.02770440882259798,
                                                "y": 0.011164732461711034
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 8.554633246527771,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.2706733029758121,
                                                "y": 0.005792959988098041
                                            },
                                            "span": {
                                                "x": 0.011844876023434347,
                                                "y": 0.00477342334538142
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-6": {
                        "duration": 9.682788990162038,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-6"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.5029722035397354,
                                                "y": 0.0006013662633949767
                                            },
                                            "span": {
                                                "x": 0.026441733750946,
                                                "y": 0.010655880984267951
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.5553747106481524,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.5029722035397354,
                                                "y": 0.0006013662633949767
                                            },
                                            "span": {
                                                "x": 0.026441733750946,
                                                "y": 0.010655880984267951
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 8.107964409722228,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.5235530422851325,
                                                "y": 0.0024521510111429785
                                            },
                                            "span": {
                                                "x": 0.01029976393904524,
                                                "y": 0.004150751222831383
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-7": {
                        "duration": 15.809253833912038,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-7"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.5444533242032816,
                                                "y": -0.006472260073768938
                                            },
                                            "span": {
                                                "x": 0.050796662795672534,
                                                "y": 0.02047079054070397
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 1.6012912326388857,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.5444533242032816,
                                                "y": -0.006472260073768938
                                            },
                                            "span": {
                                                "x": 0.050796662795672534,
                                                "y": 0.02047079054070397
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 16.007215711805543,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.6444634409892783,
                                                "y": -0.0040358227074097684
                                            },
                                            "span": {
                                                "x": 0.04911815779998781,
                                                "y": 0.019794361769656546
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-8": {
                        "duration": 4.250012631179004,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-8"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.8483663281769946,
                                                "y": -0.0002566482459489157
                                            },
                                            "span": {
                                                "x": 0.03099120848117088,
                                                "y": 0.012489295605367692
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.6774034288194173,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.8483663281769946,
                                                "y": -0.0002566482459489157
                                            },
                                            "span": {
                                                "x": 0.03099120848117088,
                                                "y": 0.012489295605367692
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 2.3385181568286697,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.8501566574689562,
                                                "y": -0.0002997069435120925
                                            },
                                            "span": {
                                                "x": 0.03099120848117088,
                                                "y": 0.012489295605367692
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "Garibaldi Panorama-9": {
                        "duration": 23.01108356022725,
                        "data": {
                            "zIndex": 2,
                            "layerProperties": {
                                "passthrough": false
                            },
                            "transition": {
                                "providerId": "FadeInOutTransitionService",
                                "inDuration": 0.5,
                                "outDuration": 0.5
                            },
                            "ContentType": "<SingleDeepZoomImage/>"
                        },
                        "header": {
                            "defaultKeyframeSequence": "Garibaldi Panorama-9"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9362758995754185,
                                                "y": 0.0013379488454688375
                                            },
                                            "span": {
                                                "x": 0.023276852541392123,
                                                "y": 0.00938045034057404
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 0.7510727515154372,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9362758995754185,
                                                "y": 0.0013379488454688375
                                            },
                                            "span": {
                                                "x": 0.023276852541392123,
                                                "y": 0.00938045034057404
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 1.5521455030308857,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9374067485177835,
                                                "y": 0.0014099511858059127
                                            },
                                            "span": {
                                                "x": 0.023276852541392123,
                                                "y": 0.00938045034057404
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 2.8835625665589504,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.9680253119152206,
                                                "y": 0.0016490975218514687
                                            },
                                            "span": {
                                                "x": 0.023276852541392123,
                                                "y": 0.00938045034057404
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                "offset": 14.989248798219222,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "viewport": {
                                        "region": {
                                            "center": {
                                                "x": 0.978058765256277,
                                                "y": 0.003016082811757971
                                            },
                                            "span": {
                                                "x": 0.017877679424215167,
                                                "y": 0.007204611695045045
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            "garibaldi audio": {
                "data": {
                    "zIndex": 1
                },
                "providerId": "AES",
                "resourceReferences": [
                    {
                        "resourceId": "R-6",
                        "required": "true"
                    }
                ],
                "experienceStreams": {
                    "garibaldi audio-0": {
                        "duration": 159.24405602544826,
                        "data": {
                            "zIndex": 1,
                            "layerProperties": {
                                "passthrough": false
                            }
                        },
                        "header": {
                            "defaultKeyframeSequence": "garibaldi audio-0"
                        },
                        "keyframes": [
                            {
                                "offset": 0,
                                "init": true,
                                "holdDuration": 0,
                                "state": {
                                    "sound": {
                                        "volume": 0.5520833333333334
                                    }
                                }
                            },
                            {
                                "offset": 2.384513585951658,
                                "init": false,
                                "holdDuration": 0,
                                "state": {
                                    "sound": {
                                        "volume": 0.5520833333333334
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
        "screenplays": {
            "SCP1": {
                "data": {
                    "experienceStreamReferences": [
                        {
                            "experienceId": "Unattached Ink-0",
                            "experienceStreamId": "Unattached Ink-0-0",
                            "begin": 0,
                            "duration": 2.6429852270903495,
                            "layer": "foreground",
                            "zIndex": 4,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-0",
                            "begin": 0,
                            "duration": 36.19434726665662,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "garibaldi audio",
                            "experienceStreamId": "garibaldi audio-0",
                            "begin": 0,
                            "duration": 159.24405602544826,
                            "layer": "foreground",
                            "zIndex": 1,
                            "dominantMedia": "audio",
                            "volume": 1
                        },
                        {
                            "experienceId": "thumbnail",
                            "experienceStreamId": "thumbnail-0",
                            "begin": 1.1102230246251565e-16,
                            "duration": 2.635739202773434,
                            "layer": "foreground",
                            "zIndex": 3,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi-0",
                            "experienceStreamId": "Garibaldi-0-0",
                            "begin": 28.76980825570913,
                            "duration": 6.071083314946925,
                            "layer": "foreground",
                            "zIndex": 7,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Ink Garibaldi Panorama-0",
                            "experienceStreamId": "Ink Garibaldi Panorama-0-0",
                            "begin": 28.85261560284139,
                            "duration": 5.881800178680756,
                            "layer": "foreground",
                            "zIndex": 6,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-1",
                            "begin": 37.38875103986812,
                            "duration": 17.068884277343755,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-2",
                            "begin": 54.807635317211876,
                            "duration": 8.030424609949932,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-3",
                            "begin": 63.654531350661976,
                            "duration": 5.627435292504941,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-4",
                            "begin": 69.87863276729894,
                            "duration": 5.975934063946752,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-5",
                            "begin": 76.44456429941701,
                            "duration": 11.342221860532404,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-6",
                            "begin": 88.38530142325959,
                            "duration": 10.182788990162038,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-7",
                            "begin": 99.51790052626884,
                            "duration": 16.309253833912038,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-8",
                            "begin": 116.37715436018088,
                            "duration": 4.750012631179004,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        },
                        {
                            "experienceId": "Garibaldi Panorama",
                            "experienceStreamId": "Garibaldi Panorama-9",
                            "begin": 121.67716699135988,
                            "duration": 23.51108356022725,
                            "layer": "foreground",
                            "zIndex": 2,
                            "dominantMedia": "visual",
                            "volume": 1
                        }
                    ]
                }
            }
        }
    }
]