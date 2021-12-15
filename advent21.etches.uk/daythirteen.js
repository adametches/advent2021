
function solutionPart1(inputData, full = false) {

    inputData = `1233,302
    454,539
    1051,301
    420,172
    313,477
    151,749
    115,382
    874,462
    602,456
    954,537
    706,365
    1160,451
    184,730
    671,225
    706,891
    602,400
    1052,215
    1009,885
    552,165
    1016,521
    705,448
    157,725
    482,779
    410,536
    776,30
    60,574
    928,502
    1033,829
    607,281
    1033,110
    850,3
    185,759
    127,238
    469,863
    512,208
    681,380
    125,593
    147,298
    314,891
    1195,660
    1260,81
    320,632
    5,93
    808,284
    378,227
    867,624
    867,176
    192,873
    1019,432
    682,369
    746,666
    1029,820
    97,436
    242,877
    162,276
    698,130
    1074,890
    1037,168
    930,9
    835,653
    239,449
    1175,392
    930,718
    1140,878
    154,354
    214,60
    520,861
    336,208
    1230,133
    867,682
    77,585
    370,80
    1181,61
    634,798
    316,274
    1133,806
    540,723
    326,802
    884,719
    206,92
    728,200
    154,540
    873,810
    865,518
    1258,624
    694,366
    142,462
    32,40
    1039,529
    576,885
    388,84
    334,262
    341,477
    258,336
    1233,309
    950,135
    442,798
    651,800
    972,312
    1275,834
    1230,780
    1056,283
    1230,226
    277,336
    1235,609
    1310,247
    1099,382
    1121,380
    441,238
    604,891
    273,250
    701,140
    1178,88
    666,134
    1225,585
    656,647
    1153,225
    1125,26
    154,556
    403,40
    1148,421
    470,462
    833,22
    910,611
    372,203
    435,753
    877,81
    1148,876
    539,100
    602,704
    18,638
    380,213
    825,606
    475,298
    107,701
    336,387
    885,682
    20,506
    900,421
    279,385
    664,880
    383,850
    0,305
    211,512
    448,142
    1258,857
    1166,463
    443,624
    97,652
    800,95
    905,78
    415,449
    609,306
    443,190
    177,701
    974,562
    734,689
    30,599
    892,425
    5,869
    513,311
    311,589
    1232,241
    295,560
    825,725
    659,94
    1228,806
    169,169
    418,469
    408,332
    462,21
    151,145
    766,681
    895,449
    94,115
    43,525
    185,26
    644,134
    416,170
    1305,176
    934,373
    1084,330
    1261,558
    513,418
    525,509
    415,221
    102,729
    288,415
    570,429
    1299,586
    790,649
    318,507
    211,176
    996,891
    604,365
    788,60
    492,428
    55,44
    902,761
    677,17
    908,276
    753,214
    1213,680
    979,359
    1145,157
    505,577
    869,737
    1056,693
    1223,221
    646,238
    213,353
    208,243
    1193,648
    1141,169
    68,663
    818,337
    1193,269
    594,768
    492,337
    1029,74
    338,312
    850,331
    380,190
    1052,336
    646,656
    209,134
    609,140
    995,586
    561,838
    1193,773
    422,103
    892,556
    962,311
    295,269
    1102,651
    420,722
    80,761
    441,894
    1216,115
    850,870
    585,413
    703,212
    565,10
    773,70
    1071,682
    758,394
    1101,824
    944,656
    20,721
    504,451
    713,365
    646,880
    1124,499
    1037,280
    366,656
    847,446
    331,551
    1258,270
    403,785
    604,771
    366,1
    1196,376
    8,108
    1121,645
    539,512
    654,647
    1290,509
    540,395
    771,190
    20,173
    397,145
    1160,448
    992,387
    372,691
    326,645
    895,221
    582,245
    469,868
    706,771
    900,108
    657,194
    1048,383
    1297,358
    863,861
    674,263
    296,339
    951,493
    956,677
    1026,80
    209,773
    605,448
    659,343
    708,438
    1058,394
    962,87
    469,31
    460,646
    94,791
    639,205
    1196,51
    23,206
    654,871
    112,386
    1195,794
    426,362
    477,358
    443,884
    438,763
    1268,814
    52,270
    356,357
    1290,385
    944,1
    1091,753
    1156,338
    50,813
    703,682
    258,334
    157,893
    425,682
    570,885
    314,451
    1004,471
    597,365
    566,836
    353,380
    80,668
    359,493
    602,409
    1007,240
    279,281
    1161,358
    546,14
    1146,557
    937,437
    654,354
    161,289
    930,848
    957,457
    606,297
    964,715
    288,438
    1133,701
    987,103
    567,234
    869,782
    1148,842
    1255,269
    912,274
    745,10
    100,879
    1310,589
    1278,73
    80,780
    554,463
    865,437
    1134,327
    810,540
    1230,668
    874,880
    1160,446
    1195,158
    85,585
    1082,271
    1206,840
    373,304
    246,18
    972,696
    1250,574
    446,651
    1064,581
    706,529
    560,563
    52,256
    682,217
    1119,840
    239,406
    1092,166
    656,247
    102,500
    112,508
    651,871
    353,270
    246,645
    987,199
    837,301
    970,891
    1278,40
    206,535
    1104,359
    80,226
    825,169
    124,462
    841,759
    577,361
    1232,801
    994,508
    957,437
    1116,646
    1108,1
    676,798
    605,462
    865,121
    314,443
    323,103
    120,830
    795,739
    1275,432
    634,621
    358,775
    195,717
    273,166
    1166,543
    982,781
    348,282
    1138,508
    1039,625
    258,558
    47,837
    852,311
    812,430
    798,432
    408,761
    437,401
    359,782
    1033,558
    400,693
    354,677
    1178,71
    867,382
    1097,653
    1213,436
    115,660
    634,135
    605,857
    211,828
    1059,557
    1129,593
    669,806
    445,518
    373,812
    1220,422
    115,606
    1026,814
    797,476
    594,276
    1064,761
    276,753
    366,863
    905,533
    465,380
    734,885
    720,511
    726,528
    905,361
    78,801
    277,465
    1006,843
    284,130
    492,141
    181,593
    284,80
    418,743
    1217,838
    889,77
    1159,145
    755,278
    1195,606
    484,878
    626,260
    519,448
    701,588
    537,246
    1156,666
    273,168
    900,787
    485,473
    107,193
    383,529
    306,807
    1036,885
    492,466
    662,184
    938,691
    117,648
    900,469
    894,170
    124,14
    847,89
    184,880
    1220,770
    295,45
    228,175
    474,383
    741,635
    1203,401
    213,653
    53,112
    278,745
    957,514
    1097,672
    754,175
    1097,334
    1266,19
    773,773
    586,215
    1153,548
    982,802
    1268,130
    492,109
    418,795
    45,74
    1148,869
    346,627
    318,835
    237,10
    1079,589
    314,616
    1099,624
    525,400
    671,302
    78,885
    393,540
    1258,256
    579,329
    770,723
    605,446
    982,92
    318,59
    493,737
    662,128
    211,458
    164,276
    469,135
    922,798
    442,96
    162,473
    522,60
    639,225
    1178,806
    994,52
    869,0
    363,462
    277,877
    1206,54
    1022,656
    144,351
    1119,537
    961,653
    831,607
    836,383
    108,432
    1016,135
    3,871
    433,81
    913,392
    415,225
    768,386
    300,217
    492,557
    884,623
    867,704
    1033,17
    129,833
    912,620
    202,310
    884,810
    208,203
    577,533
    817,157
    577,85
    708,270
    1103,861
    622,59
    700,875
    1203,193
    1280,119
    42,814
    338,582
    584,814
    770,376
    1258,37
    224,325
    311,241
    957,270
    6,16
    288,1
    1076,274
    872,131
    1123,660
    328,647
    1171,603
    627,390
    49,432
    1104,304
    1052,334
    296,422
    463,446
    634,311
    1149,812
    927,492
    1261,37
    586,616
    686,10
    785,400
    380,9
    381,614
    1071,600
    754,719
    770,126
    731,406
    952,775
    1037,166
    841,863
    1156,420
    68,782
    77,309
    1034,141
    574,226
    25,66
    254,611
    208,691
    828,802
    334,632
    740,681
    967,704
    1255,44
    400,771
    141,311
    1116,806
    35,834
    49,857
    756,11
    623,45
    351,212
    1255,717
    749,504
    1074,228
    890,620
    33,270
    646,14
    406,689
    406,460
    348,535
    1193,717
    1133,470
    373,530
    705,717
    1207,129
    1160,443
    873,401
    1031,505
    277,784
    544,681
    579,854
    870,508
    405,368
    1148,428
    388,842
    373,82
    50,529
    336,562
    15,302
    370,316
    254,358
    713,529
    878,616
    232,563
    974,451
    349,241
    338,274
    1183,656
    771,158
    1033,877
    211,190
    862,802
    944,238
    977,93
    1255,430
    113,894
    682,208
    838,827
    1300,358
    462,33
    182,827
    1216,787
    222,278
    676,61
    132,823
    184,432
    42,130
    55,193
    503,271
    676,173
    1004,535
    542,386
    1007,654
    662,710
    1226,681
    348,311
    902,581
    273,644
    1056,127
    246,338
    1257,782
    366,238
    1036,494
    716,276
    698,80
    15,225
    1148,473
    1116,331
    405,526
    8,338
    448,304
    676,273
    177,806
    705,432
    472,582
    515,464
    1266,875
    672,243
    441,157
    1099,190
    129,61
    818,141
    638,243
    705,446
    929,166
    902,133
    972,198
    679,436
    1282,633
    177,470
    552,842
    308,43
    195,269
    212,96
    107,401
    654,780
    52,37
    930,213
    82,130
    53,616
    82,338
    376,787
    750,563
    701,88
    841,31
    277,558
    605,409
    1015,560
    1133,88
    540,768
    955,894
    950,373
    1280,458
    246,313
    785,509
    599,641
    826,878
    534,864
    918,754
    366,68
    656,540
    929,250
    92,253
    662,16
    848,33
    798,686
    480,185
    10,646
    360,521
    937,812
    1287,654
    224,569
    1158,709
    1183,238
    669,134
    484,16
    788,834
    1151,807
    527,505
    669,358
    885,458
    115,889
    150,451
    706,675
    331,535
    1235,385
    947,462
    277,334
    703,794
    974,387
    67,145
    806,451
    952,339
    738,563
    1034,227
    87,673
    626,441
    1064,313
    636,403
    525,414
    704,597
    53,728
    654,23
    682,665
    1125,868
    1158,142
    432,278
    826,16
    298,481
    841,420
    504,327
    969,134
    117,177
    1304,710
    674,43
    477,872
    512,432
    907,109
    872,329
    326,695
    708,400
    1116,358
    460,563
    557,214
    579,609
    1202,432
    484,318
    326,781
    281,82
    1258,438
    933,110
    791,693
    984,647
    323,199
    87,234
    818,276
    1081,652
    206,416
    994,198
    117,773
    537,760
    162,842
    1051,145
    1002,179
    259,301
    624,884
    254,198
    830,185
    1304,16
    132,88
    231,305
    447,33
    1104,416
    5,421
    773,246
    900,425
    956,5
    989,877
    1242,112
    1101,717
    49,485
    338,198
    1228,652
    62,666
    1292,638
    522,834
    1159,719
    1071,294
    869,222
    1267,525
    482,354
    177,424
    132,806
    1148,276
    1033,65
    134,89
    191,537
    944,415
    733,533
    1232,653
    181,301
    460,870
    749,56
    425,458
    1169,583
    773,760
    55,878
    477,470
    900,536
    49,462
    870,834
    1130,467
    458,583
    175,586
    711,16
    664,238
    1238,323
    20,164
    392,140
    1002,715
    164,842
    951,45
    440,60
    798,208
    328,802
    154,666
    519,392
    492,753
    656,589
    586,726
    758,36
    664,656
    1255,850
    510,95
    206,304
    907,785
    889,369
    197,541
    743,212
    277,17
    209,121
    381,166
    930,256
    284,814
    1258,848
    144,358
    631,436
    705,409
    164,557
    564,339
    5,801
    164,421
    701,457
    716,170
    1168,164
    274,885
    1012,805
    813,361
    443,512
    296,555
    797,642
    908,618
    669,88
    134,805
    744,58
    1104,92
    11,586
    52,8
    405,533
    724,887
    388,798
    694,528
    236,4
    746,480
    579,406
    1217,369
    1158,409
    1261,292
    771,553
    135,670
    1290,721
    1171,291
    621,270
    535,257
    552,36
    1078,563
    77,592
    1260,529
    930,46
    1176,879
    797,418
    410,787
    1115,625
    976,430
    708,190
    1115,269
    1125,759
    426,84
    402,276
    869,894
    408,220
    676,583
    1079,753
    657,700
    748,809
    277,110
    922,390
    179,689
    3,423
    785,480
    443,704
    622,583
    537,121
    418,649
    651,423
    561,56
    1097,222
    848,649
    115,288
    791,448
    1076,620
    1213,458
    950,521
    207,861
    393,876
    194,358
    331,359
    209,760
    1198,386
    1004,282
    691,248
    1218,274
    736,761
    641,536
    152,142
    376,373
    fold along x=655
    fold along y=447
    fold along x=327
    fold along y=223
    fold along x=163
    fold along y=111
    fold along x=81
    fold along y=55
    fold along x=40
    fold along y=27
    fold along y=13
    fold along y=6`

    const dataArray = inputData.split('\n').map(x=>x.trim())//.map(row => row.trim().split(','))
    const folds = dataArray.filter(x => x.startsWith("fold")).map(x => x.trim().replace('fold along ', ''))
    const dots = dataArray.filter(x => !x.startsWith("fold")).filter(x => x != '').map(row => row.trim().split(','))
    const maxY = dots.map(x => x[1]).map(Number).sort((a, b) => a - b).splice(-1)[0] + 1 
    const maxX = dots.map(x => x[0]).map(Number).sort((a, b) => a - b).splice(-1)[0] + 1 
    console.log(maxX, maxY)
    let grid = Array.from(Array(maxY), () => new Array(maxX).fill('--'))

    for (let i = 0; i < dots.length; i++) {
        [x, y] = dots[i]
        grid[y][x] = '\u2B1B'
    }
    let len = 1;
    if (full) len = folds.length
    for (let i = 0; i < len; i++) {
        
        grid = fold(folds[i], grid)
    }
    print2dArray(grid)
    let dotCount = grid.flat().filter(x => x === '#').length
    return dotCount;
}
function fold(foldString, grid) {
    [axis, place] = foldString.split("=")
    place = parseInt(place)
    if (axis == 'y') {
        first = grid.slice(0, place)
        last = grid.slice(place + 1)
        len = last.length - 1;
        for (i = Math.abs(first.length - last.length); i < last.length; i++) {
            row = first[i];
            for (j = 0; j < row.length; j++) {
                if (first[i][j] != '\u2B1B') {
                    first[i][j] = last[len - i][j]
                }
            }
        }
    }
    else {
        first = [];
        last = [];
        for (i = 0; i < grid.length; i++) {
            row = grid[i]
            first[i] = row.slice(0, place)
            last[i] = row.slice(place + 1)
        }
        for (i = 0; i < first.length; i++) {
            row = first[i];
            len = row.length - 1;
            for (j = 0; j < row.length; j++) {
                if (first[i][j] != '\u2B1B') {
                    first[i][j] = last[i][len - j]
                }

            }
        }
    }
    return first;
}
function solutionPart2(inputData) {
    solutionPart1(inputData, true)
}
function print2dArray(array) {
    array.forEach(rwo => {
        let printrwo = ' '
        rwo.forEach(cell => {

            printrwo += cell + '  '
        });
        printrwo = printrwo.substring(0, printrwo.length - 1);
        console.log(printrwo)

    });

}
console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);
