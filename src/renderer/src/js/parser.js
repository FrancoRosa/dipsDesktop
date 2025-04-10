const sample = `... telnet connected! 10001
... connected to veeder root
... 2025-04-10 14:07:14 processing I50G00
I50G00
04.10.25 2:11 PM
69672
Castle Fuels
410 panorama Drive
Invermere,BC
FAX NAME:
... 2025-04-10 14:07:21 completed I50G00
... ________________________________________
... 2025-04-10 14:07:22 processing I5P100
I5P100
04.10.25 2:12 PM
AUTOMATIC EVENTS ALL TASKS REPORT
Event ID - 0001
EVENT - Leak Alarm : Disabled
EVENT - High Water Alarm : Disabled
EVENT - Overfill Alarm : Disabled
EVENT - Low Limit Alarm : Disabled
EVENT - Theft Alarm : Disabled
EVENT - Delivery Start : Disabled
EVENT - Delivery Stop : Disabled
EVENT - External Input On : Disabled
EVENT - External Input Off : Disabled
EVENT - Sensor Fuel Alarm : Disabled
EVENT - Sensor Water Alarm : Disabled
EVENT - Sensor Out Alarm : Disabled
ACTION - AutoXmit
DEVICE - Co 1 : DIS-50 Remote
------
Event ID - 0003
TIME - Daily, 12:00 AM
REPORT - Current Inventory Report
DEVICE - TLSIntegralPrinter
------
Event ID - 0004
EVENT - OVERFILL ALARM : ALL TANKS
EVENT - HIGH PRODUCT ALARM : ALL TANKS
ACTION -
DEVICE - R 6 : Overfill Alarm
------
Event ID - 0005
EVENT - SHORT ALARM : L1: T6 STP , L2: Disp 1/2
EVENT - FUEL ALARM : L1: T6 STP , L2: Disp 1/2
EVENT - SENSOR OUT ALARM : L1: T6 STP , L2: Disp 1/2
EVENT - HIGH LIQUID ALARM : L1: T6 STP , L2: Disp 1/2
EVENT - EXTERN INPUT ALARM : ALL EXTERNAL INPUTS
ACTION -
DEVICE - R 5 : Dispenser Head power
------
Event ID - 0006
EVENT - HIGH WATER ALARM : T2: Diesel 54K, T4: Diesel 54K
EVENT - EXTERN INPUT ALARM : ALL EXTERNAL INPUTS
EVENT - PROBE OUT : T2: Diesel 54K, T4: Diesel 54K
EVENT - FUEL ALARM : L3: NW Trans, L5: SW Trans
EVENT - SENSOR OUT ALARM : L3: NW Trans, L5: SW Trans
EVENT - SHORT ALARM : L3: NW Trans, L5: SW Trans
EVENT - HIGH LIQUID ALARM : L3: NW Trans, L5: SW Trans
EVENT - HIGH PRODUCT ALARM : T2: Diesel 54K, T4: Diesel 54K
ACTION -
DEVICE - R 1 : T2/T4 Pump 1
------
Event ID - 0007
EVENT - HIGH WATER ALARM : T5: Diesel 90K
EVENT - EXTERN INPUT ALARM : ALL EXTERNAL INPUTS
EVENT - FUEL ALARM : L4: NE Trans, L6: SE Trans
EVENT - SENSOR OUT ALARM : L4: NE Trans, L6: SE Trans
EVENT - SHORT ALARM : L4: NE Trans, L6: SE Trans
EVENT - HIGH LIQUID ALARM : L4: NE Trans, L6: SE Trans
EVENT - HIGH PRODUCT ALARM : T5: Diesel 90K
EVENT - PROBE OUT : T5: Diesel 90K
ACTION -
DEVICE - R 2 : T5 Pump 2
------
Event ID - 0008
EVENT - HIGH LIQUID ALARM : L4: NE Trans, L6: SE Trans
EVENT - HIGH WATER ALARM : T3: Stove 54K
EVENT - EXTERN INPUT ALARM : ALL EXTERNAL INPUTS
EVENT - HIGH PRODUCT ALARM : T3: Stove 54K
EVENT - PROBE OUT : T3: Stove 54K
EVENT - FUEL ALARM : L4: NE Trans, L6: SE Trans
EVENT - SENSOR OUT ALARM : L4: NE Trans, L6: SE Trans
EVENT - SHORT ALARM : L4: NE Trans, L6: SE Trans
ACTION -
DEVICE - R 3 : T3 Pump 3
------
Event ID - 0009
EVENT - HIGH WATER ALARM : T1: Reg 54K
EVENT - EXTERN INPUT ALARM : ALL EXTERNAL INPUTS
EVENT - HIGH PRODUCT ALARM : T1: Reg 54K
EVENT - PROBE OUT : T1: Reg 54K
EVENT - FUEL ALARM : L3: NW Trans, L5: SW Trans
EVENT - SENSOR OUT ALARM : L3: NW Trans, L5: SW Trans
EVENT - SHORT ALARM : L3: NW Trans, L5: SW Trans
EVENT - HIGH LIQUID ALARM : L3: NW Trans, L5: SW Trans
ACTION -
DEVICE - R 4 : T1 Pump 4
------
Event ID - 0010
EVENT - SETUP DATA WARNING : ALL TANKS
EVENT - LEAK ALARM : ALL TANKS
EVENT - HIGH WATER ALARM : ALL TANKS
EVENT - OVERFILL ALARM : ALL TANKS
EVENT - LOW PRODUCT ALARM : ALL TANKS
EVENT - SUDDEN LOSS ALARM : ALL TANKS
EVENT - HIGH PRODUCT ALARM : ALL TANKS
EVENT - INVALID FUEL LEVEL : ALL TANKS
EVENT - PROBE OUT : ALL TANKS
EVENT - HIGH WATER WARNING : ALL TANKS
EVENT - DELIVERY NEEDED : ALL TANKS
EVENT - MAX PRODUCT ALARM : ALL TANKS
EVENT - GROSS TEST FAIL : ALL TANKS
EVENT - PERIODIC TEST FAIL : ALL TANKS
EVENT - ANNUAL TEST FAIL : ALL TANKS
EVENT - PER TST NEEDED WRN : ALL TANKS
EVENT - ANN TST NEEDED WRN : ALL TANKS
EVENT - PER TST NEEDED ALM : ALL TANKS
EVENT - ANN TST NEEDED ALM : ALL TANKS
EVENT - TANK TEST ACTIVE : ALL TANKS
EVENT - TANK SIPHON BREAK : ALL TANKS
EVENT - RECON WARNING : ALL TANKS
EVENT - RECON ALARM : ALL TANKS
EVENT - LOW TEMP WARNING : ALL TANKS
EVENT - GROSS FAIL LINE TNK : ALL TANKS
EVENT - DENSITY WARNING : ALL TANKS
EVENT - FUEL QUALITY ALM : ALL TANKS
EVENT - HIGH TEMPERATURE ALARM: ALL TANKS
EVENT - LOW TEMPERATURE ALARM: ALL TANKS
EVENT - DENSITY OFFSET WARN : ALL TANKS
EVENT - SETUP DATA WARNING : ALL LIQUID SENSORS
EVENT - FUEL ALARM : ALL LIQUID SENSORS
EVENT - SENSOR OUT ALARM : ALL LIQUID SENSORS
EVENT - SHORT ALARM : ALL LIQUID SENSORS
EVENT - WATER ALARM : ALL LIQUID SENSORS
EVENT - WATER OUT ALARM : ALL LIQUID SENSORS
EVENT - HIGH LIQUID ALARM : ALL LIQUID SENSORS
EVENT - LOW LIQUID ALARM : ALL LIQUID SENSORS
EVENT - LIQUID WARNING : ALL LIQUID SENSORS
ACTION -
DEVICE - R 7 : remote alarm
------
... 2025-04-10 14:07:32 completed I5P100
... ________________________________________
... 2025-04-10 14:07:33 processing I60400
I60400
04.10.25 2:12 PM
TANK FULL VOLUME
TANK LABEL LITERS
1 Reg 54K 54000
2 Diesel 54K 54000
3 Stove 54K 54000
4 Diesel 54K 54000
5 Diesel 90K 90105
6 Diesel 23K 22768
7 0
8 0
9 0
10 0
11 0
12 0
13 0
14 0
15 0
16 0
17 0
18 0
19 0
20 0
21 0
22 0
23 0
24 0
25 0
26 0
27 0
28 0
29 0
30 0
31 0
32 0
33 0
34 0
35 0
36 0
37 0
38 0
39 0
40 0
41 0
42 0
43 0
44 0
45 0
46 0
47 0
48 0
49 0
50 0
51 0
52 0
53 0
54 0
55 0
56 0
57 0
58 0
59 0
60 0
61 0
62 0
63 0
64 0
... 2025-04-10 14:07:41 completed I60400
... ________________________________________
... 2025-04-10 14:07:42 processing I80900
I80900
04.10.25 2:12 PM
RELAY ORIENTATION
RELAY DESIGNATION ORIENTATION
1 T2/T4 Pump 1 Normally Closed
2 T5 Pump 2 Normally Closed
3 T3 Pump 3 Normally Closed
4 T1 Pump 4 Normally Closed
5 Dispenser Head power Normally Closed
6 Overfill Alarm Normally Open
7 remote alarm Normally Open
8 Normally Open
9 Normally Open
10 Normally Open
11 Normally Open
12 Normally Open
13 Normally Open
14 Normally Open
15 Normally Open
16 Normally Open
17 Normally Open
18 Normally Open
19 Normally Open
20 Normally Open
21 Normally Open
22 Normally Open
23 Normally Open
24 Normally Open
25 Normally Open
26 Normally Open
27 Normally Open
28 Normally Open
29 Normally Open
30 Normally Open
31 Normally Open
32 Normally Open
... 2025-04-10 14:07:49 completed I80900
... ________________________________________
... 2025-04-10 14:07:50 processing I70200
I70200
04.10.25 2:12 PM
LIQUID LABEL
DEVICE LABEL
1 T6 STP
2 Disp 1/2
3 NW Trans
4 NE Trans
5 SW Trans
6 SE Trans
7
8
9
1
0
1
1
1
2
1
3
1
4
1
5
1
6
1
7
1
8
1
9
2
0
2
1
2
2
2
3
2
4
2
5
2
6
2
7
2
8
2
9
3
0
3
1
3
2
3
3
3
4
3
5
3
6
3
7
3
8
3
9
4
0
4
1
4
2
4
3
4
4
4
5
4
6
4
7
4
8
4
9
5
0
5
1
5
2
5
3
5
4
5
5
5
6
5
7
5
8
5
9
6
0
6
1
6
2
6
3
6
4
6
5
6
6
6
7
6
8
6
9
7
0
7
1
7
2
7
3
7
4
7
5
7
6
7
7
7
8
7
9
8
0
8
1
8
2
8
3
8
4
8
5
8
6
8
7
8
8
8
9
9
0
9
1
9
2
9
3
9
4
9
5
96
97
98
99
... 2025-04-10 14:07:58 completed I70200
... ________________________________________
... 2025-04-10 14:07:59 processing I62100
I62100
04.10.25 2:12 PM
TANK LOW PRODUCT LIMIT
TANK LABEL LITERS
1 Reg 54K 2389
2 Diesel 54K 2406
3 Stove 54K 2412
4 Diesel 54K 2407
5 Diesel 90K 2417
6 Diesel 23K 1264
7 0
8 0
9 0
10 0
11 0
12 0
13 0
14 0
15 0
16 0
17 0
18 0
19 0
20 0
21 0
22 0
23 0
24 0
25 0
26 0
27 0
28 0
29 0
30 0
31 0
32 0
33 0
34 0
35 0
36 0
37 0
38 0
39 0
40 0
41 0
42 0
43 0
44 0
45 0
46 0
47 0
48 0
49 0
50 0
51 0
52 0
53 0
54 0
55 0
56 0
57 0
58 0
59 0
60 0
61 0
62 0
63 0
64 0
... 2025-04-10 14:08:06 completed I62100
... ________________________________________
... 2025-04-10 14:08:07 processing I62200
I62200
04.10.25 2:12 PM
TANK HIGH PRODUCT LIMIT
TANK LABEL LITERS PERCENT
1 Reg 54K 52380 97
2 Diesel 54K 52380 97
3 Stove 54K 52380 97
4 Diesel 54K 52380 97
5 Diesel 90K 87402 97
6 Diesel 23K 22085 97
7 0 0
8 0 0
9 0 0
10 0 0
11 0 0
12 0 0
13 0 0
14 0 0
15 0 0
16 0 0
17 0 0
18 0 0
19 0 0
20 0 0
21 0 0
22 0 0
23 0 0
24 0 0
25 0 0
26 0 0
27 0 0
28 0 0
29 0 0
30 0 0
31 0 0
32 0 0
33 0 0
34 0 0
35 0 0
36 0 0
37 0 0
38 0 0
39 0 0
40 0 0
41 0 0
42 0 0
43 0 0
44 0 0
45 0 0
46 0 0
47 0 0
48 0 0
49 0 0
50 0 0
51 0 0
52 0 0
53 0 0
54 0 0
55 0 0
56 0 0
57 0 0
58 0 0
59 0 0
60 0 0
61 0 0
62 0 0
63 0 0
64 0 0
... 2025-04-10 14:08:15 completed I62200
... ________________________________________
... 2025-04-10 14:08:16 processing I62300
I62300
04.10.25 2:12 PM
TANK OVERFILL LEVEL LIMIT
TANK LABEL LITERS PERCENT
1 Reg 54K 51300 95
2 Diesel 54K 51300 95
3 Stove 54K 51300 95
4 Diesel 54K 51300 95
5
Die
s
el 9
0
K
8
5
6
0
0
9
5
6
Die
s
el 2
3
K
2
1
6
3
0
9
5
7
0
0
8
0
0
9
0
0
1
0
0
0
1
1
0
0
1
2
0
0
1
3
0
0
1
4
0
0
1
5
0
0
1
6
0
0
1
7
0
0
1
8
0
0
1
9
0
0
2
0
0
0
2
1
0
0
2
2
0
0
2
3
0
0
2
4
0
0
2
5
0
0
2
6
0
0
2
7
0
0
2
8
0
0
2
9
0
0
3
0
0
0
3
1
0
0
3
2
0
0
3
3
0
0
3
4
0
0
3
5
0
0
3
6
0
0
3
7
0
0
3
8
0
0
3
9
0
0
4
0
0
0
4
1
0
0
4
2
0
0
4
3
0
0
4
4
0
0
4
5
0
0
4
6
0
0
4
7
0
0
48 0 0
49 0 0
50 0 0
51 0 0
52 0 0
53 0 0
54 0 0
55 0 0
56 0 0
57 0 0
58 0 0
59 0 0
60 0 0
61 0 0
62 0 0
63 0 0
64 0 0
... 2025-04-10 14:08:24 completed I62300
... ________________________________________
... connection closed
... connection closed
... connection closed`

const sample2 = `DEVICE - R 7 : remote alarm
------
... 2025-04-10 14:07:32 completed I5P100
5 Diesel 90K 90105
6 Diesel 23K 22768
7 0
8 0

Other data
5 SW Trans
6 SE Trans
7
8

Other data
5 Diesel 90K 87402 97
6 Diesel 23K 22085 97
7 0 0
8 0 0
9 0 0
`

export const sanitizer = (text) => {
  return text
    .split('\n')
    .filter((line) => {
      // Remove lines starting with '... '
      if (line.startsWith('... ')) return false

      // Match lines like "5 0 0", "7 0 0", "8 empty", "9"
      const match = line.trim().match(/^(\d+)(\s+.*)?$/)
      if (match) {
        const content = (match[2] || '').trim()
        // If empty or only zeros or "empty"
        if (!content || /^0(\s+0)*$/.test(content) || content === 'empty') {
          return false
        }
      }

      return true
    })
    .join('\n')
}
