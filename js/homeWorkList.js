const subjectsCode = {
    NAC: 'NAC',
    MAT: 'MAT',
    ENG: 'ENG',
    HIN: 'HIN',
    COM: 'COM',
    EVS: 'EVS',
    ALL: 'ALL',
    MAR: 'MAR'
};

const subjects = {
    NAC: 'Non Academic',
    MAT: 'Maths',
    ENG: 'English',
    HIN: 'Hindi',
    COM: 'Computer',
    EVS: 'EVS',
    ALL: 'ALL',
    MAR: 'Marthi'
};

const baseDownloadUrl = '/assets/pdf/class_first/';

const downLoadFolders = {
    NAC: baseDownloadUrl + 'non_academic/',
    MAT: baseDownloadUrl + 'maths/',
    ENG: baseDownloadUrl + 'english/',
    HIN: baseDownloadUrl + 'hindi/',
    COM: baseDownloadUrl + 'computer/',
    EVS: baseDownloadUrl + 'evs/',
    ALL: baseDownloadUrl + 'all/',
    MAR: baseDownloadUrl + 'marthi/'
};

let getDownloadLink = function getDownloadLink(subject, fileName) {
    return downLoadFolders[subject];
};

const downloads = [
    {
        id: "",
        date: "23/05/2020",
        description: "Moral stories grade 1",
        subject: subjects.NAC,
        fileName: "684_Stay Home Reader-grade 1.pdf",
        actualLink: "http://mlzswakad.cloud9edu.in/frmViewDownload.aspx?fileName=684_Stay%20Home%20Reader-grade%201.pdf",
        downloadLink: getDownloadLink(subjectsCode.NAC),
        notes: ""
    }, {
        id: "",
        date: "23/04/2020",
        description: "Math holiday activity",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "22/04/2020",
        description: "Education plus (eplus) for Std- I (II) login id and passwords",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "22/04/2020",
        description: "Prepmy skills circular for STD I",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "22/04/2020",
        description: "Prepmy skills brochure for STD I",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/04/2020",
        description: "Oxford University Press",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "15/04/2020",
        description: "Home Activity",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "12/04/2020",
        description: "Worksheet-about plantaa",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "07/04/2020",
        description: "Class - 1 Hindi Activity No. 2a",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "06/04/2020",
        description: "Activity worksheet on Multiplication",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "06/04/2020",
        description: "Craft assignment",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "01/04/2020",
        description: "Activity worksheet on Place Value",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "30/03/2020",
        description: "Literati Newsletter for I",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "28/03/2020",
        description: "Fitness Regime for I",
        subject: subjects.NAC,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/03/2020",
        description: "Home activity",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "26/03/2020",
        description: "Class - 1 Hindi Grammar Online link for practice",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "26/03/2020",
        description: "Practice paper 1",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "Term-III Class Test (L-12 The World of Plants))",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "Term-III Class Test (L-10 Air)",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "Term 3 Consolidated worksheet",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "Class test evs L 13",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "U-12 CLASSTEST WORKSHEET",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "	U-10 Money",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "L-14 CLASSTEST WORKSHEET",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "CONSOLIDATED WORKSHEET",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "17/03/2020",
        description: "L-11 Water",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "term 3 ws 4",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "term 3 ws 3",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "term 3 ws 2",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "term 3 ws 1",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "Term-III Grammar consolidated revision worksheet",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "Term III Syllabus STD I",
        subject: subjects.ALL,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "Term-III Class test (U-11 Patterns)",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "Worksheet",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "16/03/2020",
        description: "Worksheet",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "L-8 Revision Worksheet Term III",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "L-7 Revision Worksheet Term III",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "U-9, More about Addition and Subtraction",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "L-13 Champa's Fruit Basket",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "class test term III eng L 14",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "Class test term III math unit 8",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "L-15 At the Traffic Light",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "13/03/2020",
        description: "U-7 Time Class Test	MATHS",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "12/03/2020",
        description: "L-15 At the Traffic light Notes",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "11/03/2020",
        description: "Notes L-14 The Sun,the Moon and the Stars",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "11/03/2020",
        description: "EVS L 12 notes",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "10/03/2020",
        description: "Notes L-13 The World of Animals",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/03/2020",
        description: "Eng L 14 notes",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "04/03/2020",
        description: "Vitaan Lesson 11-15 month-fab",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "20/02/2020",
        description: "evs l 11 notes",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "20/02/2020",
        description: "Eng L 13 notes",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/02/2020",
        description: "EVS consolidated worksheet RP 3",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "03/02/2020",
        description: "unit 8 Revision worksheet",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "03/02/2020",
        description: "unit 9 Revision worksheet",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "31/01/2020",
        description: "Review paper 3 revision worksheet",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "31/01/2020",
        description: "	RP III Eng Grammar",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "31/01/2020",
        description: "RP III Consolidated Revision worksheet",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/01/2020",
        description: "Revision worksheet L 10",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/01/2020",
        description: "Revision Worksheet Grammar -1",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/01/2020",
        description: "l.8 Revision worksheet RP-III",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/01/2020",
        description: "L.7 Revision Worksheet RP III",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/01/2020",
        description: "Review paper 3 revision worksheet",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/01/2020",
        description: "Revision worksheet L 9",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/01/2020",
        description: "Revision worksheet L 10,11",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/01/2020",
        description: "RP-3 REVISION WORKSHEET 32",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/01/2020",
        description: "RP-3 REVISION WORKSHEET 2",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "27/01/2020",
        description: "RP-3 REVISION WORKSHEET",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "24/01/2020",
        description: "L.7 Fun with Tux paint notes",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "22/01/2020",
        description: "Lesson 6-10 month-January",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "18/01/2020",
        description: "L 10 Air",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "18/01/2020",
        description: "L 11",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "10/01/2020",
        description: "L-7 Fun with Tux Paint",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "07/01/2020",
        description: "L 9",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "07/01/2020",
        description: "L10 notes",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "18/12/2019",
        description: "std 1 marathi notes term 2",
        subject: subjects.MAR,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "12/12/2019",
        description: "Class test 4",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "10/12/2019",
        description: "term 2 worksheet 4",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "10/12/2019",
        description: "term 2 worksheet 3",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Term II Class Test 2 L8,9",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Revision worksheet term 2( ws 2)",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Revision worksheet term 2( ws1)",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "MATH WORKSHEET (Class test 3)",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Class test 3",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Class test 2",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Class test 1",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "MATH WORKSHEET(CLASS TEST 2)",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "MATH WORKSHEET(CLASS TEST 1)",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "09/12/2019",
        description: "Term II Class Test -1 L-7",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "04/12/2019",
        description: "Revision Test Worksheet",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "30/11/2019",
        description: "pathmala Lesson 2 -6 and Vyakaran month- Nov",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/11/2019",
        description: "ENGLISH NOTES(L-9)",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/11/2019",
        description: "ENGLISH NOTES(L-8)",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "29/11/2019",
        description: "ENGLISH NOTES(L-7)",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "28/11/2019",
        description: "EVS L - 8 notes",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "28/11/2019",
        description: "EVS L - 8 notes",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "28/11/2019",
        description: "EVS L - 7 notes",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "25/11/2019",
        description: "L-5 Uing a computer mouse",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "07/11/2019",
        description: "RP-2,Revision worksheet",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "07/11/2019",
        description: "EVS REVIEWPAPER CW",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "07/11/2019",
        description: "Revision worksheet 2",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "L-4 More about Keyboard",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "L-3 Uses of Computer",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "RPII Revision worksheet 1",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "RPII Revision worksheet 1",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "Review Paper II, HW worksheet",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "RP 2 revision woksheet 1",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "Review paper II revision worksheet",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "revision worksheet 1 rp2",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "math review paper 2 revision worksheet 1",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "math revision worksheet 1",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "	Review Paper2 HW worksheet",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "Computer Revision Worksheet for Review Paper II",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "Math Review paper revision worksheet 1",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "05/11/2019",
        description: "Maths Review paper worksheet 1",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "23/10/2019",
        description: "lesson 10 - 12",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "23/10/2019",
        description: "Cl-1 Lesson 10-12 and vyakaran WS - RP2 - 2",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "23/10/2019",
        description: "Cl-1 Lesson 10-12 and vyakaran WS - RP2 1",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "23/10/2019",
        description: "Cl-1 Lesson 10-12 and vyakaran WS - RP2 - 2",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "EVS L-6",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Eng L-6",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Eng l-5",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Computer Notes L-3(Uses of computer)",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "EVS lesson -5",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Ek jaise arthvale shabd Vyakarn",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "marathi notes std 1",
        subject: subjects.MAR,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Math worksheet grade 1",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Lesson 7-9 and Vyakaran",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Std 2 MATH Worksheet CW---------------",
        subject: subjects.MAT,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "COMPUTER REVISION WORKSHEET_ TERM I",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "evs homework revision worksheet",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Evs classwork revision worksheet",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "REVISION CLASSWORK SHEET",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "REVISION HOMEWORK SHEET",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Cl 1 RWS 4",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Cl 1 RWS 3",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Cl 1 RWS 2",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Cl 1 RWS 1",
        subject: '',
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Computer (L-2 Parts Of a Computer)",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "EVS L-3, My Neighbourhood(Notes)",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "EVS L-2, My Body(Notes)",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "EVS L-1, My Family(Notes)",
        subject: subjects.EVS,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "ENGLISH",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Competitive exam time table",
        subject: "",
        actualLink: "",
        downloadLink: "",
        notes: ""
    },{
        id: "",
        date: "",
        description: "ENGLISH",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "ENGLISH",
        subject: subjects.ENG,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "IT Revision Worksheet",
        subject: subjects.COM,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Std-I Hindi Notes and revision worksheet",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }, {
        id: "",
        date: "",
        description: "Std-I Hindi Notes and revision worksheet",
        subject: subjects.HIN,
        actualLink: "",
        downloadLink: "",
        notes: ""
    }
];

//export default downloads;