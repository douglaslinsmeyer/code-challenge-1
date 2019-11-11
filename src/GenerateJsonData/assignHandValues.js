const fs = require('fs');

const cards = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'];

const twoCardCombos = ['3D2D','4D2D','5D2D','6D2D','7D2D','8D2D','9D2D','TD2D','JD2D','QD2D','KD2D','AD2D','2H2D','3H2D','4H2D','5H2D','6H2D','7H2D','8H2D','9H2D','TH2D','JH2D','QH2D','KH2D','AH2D','2C2D','3C2D','4C2D','5C2D','6C2D','7C2D','8C2D','9C2D','TC2D','JC2D','QC2D','KC2D','AC2D','2S2D','3S2D','4S2D','5S2D','6S2D','7S2D','8S2D','9S2D','TS2D','JS2D','QS2D','KS2D','AS2D','2D3D','4D3D','5D3D','6D3D','7D3D','8D3D','9D3D','TD3D','JD3D','QD3D','KD3D','AD3D','2H3D','3H3D','4H3D','5H3D','6H3D','7H3D','8H3D','9H3D','TH3D','JH3D','QH3D','KH3D','AH3D','2C3D','3C3D','4C3D','5C3D','6C3D','7C3D','8C3D','9C3D','TC3D','JC3D','QC3D','KC3D','AC3D','2S3D','3S3D','4S3D','5S3D','6S3D','7S3D','8S3D','9S3D','TS3D','JS3D','QS3D','KS3D','AS3D','2D4D','3D4D','5D4D','6D4D','7D4D','8D4D','9D4D','TD4D','JD4D','QD4D','KD4D','AD4D','2H4D','3H4D','4H4D','5H4D','6H4D','7H4D','8H4D','9H4D','TH4D','JH4D','QH4D','KH4D','AH4D','2C4D','3C4D','4C4D','5C4D','6C4D','7C4D','8C4D','9C4D','TC4D','JC4D','QC4D','KC4D','AC4D','2S4D','3S4D','4S4D','5S4D','6S4D','7S4D','8S4D','9S4D','TS4D','JS4D','QS4D','KS4D','AS4D','2D5D','3D5D','4D5D','6D5D','7D5D','8D5D','9D5D','TD5D','JD5D','QD5D','KD5D','AD5D','2H5D','3H5D','4H5D','5H5D','6H5D','7H5D','8H5D','9H5D','TH5D','JH5D','QH5D','KH5D','AH5D','2C5D','3C5D','4C5D','5C5D','6C5D','7C5D','8C5D','9C5D','TC5D','JC5D','QC5D','KC5D','AC5D','2S5D','3S5D','4S5D','5S5D','6S5D','7S5D','8S5D','9S5D','TS5D','JS5D','QS5D','KS5D','AS5D','2D6D','3D6D','4D6D','5D6D','7D6D','8D6D','9D6D','TD6D','JD6D','QD6D','KD6D','AD6D','2H6D','3H6D','4H6D','5H6D','6H6D','7H6D','8H6D','9H6D','TH6D','JH6D','QH6D','KH6D','AH6D','2C6D','3C6D','4C6D','5C6D','6C6D','7C6D','8C6D','9C6D','TC6D','JC6D','QC6D','KC6D','AC6D','2S6D','3S6D','4S6D','5S6D','6S6D','7S6D','8S6D','9S6D','TS6D','JS6D','QS6D','KS6D','AS6D','2D7D','3D7D','4D7D','5D7D','6D7D','8D7D','9D7D','TD7D','JD7D','QD7D','KD7D','AD7D','2H7D','3H7D','4H7D','5H7D','6H7D','7H7D','8H7D','9H7D','TH7D','JH7D','QH7D','KH7D','AH7D','2C7D','3C7D','4C7D','5C7D','6C7D','7C7D','8C7D','9C7D','TC7D','JC7D','QC7D','KC7D','AC7D','2S7D','3S7D','4S7D','5S7D','6S7D','7S7D','8S7D','9S7D','TS7D','JS7D','QS7D','KS7D','AS7D','2D8D','3D8D','4D8D','5D8D','6D8D','7D8D','9D8D','TD8D','JD8D','QD8D','KD8D','AD8D','2H8D','3H8D','4H8D','5H8D','6H8D','7H8D','8H8D','9H8D','TH8D','JH8D','QH8D','KH8D','AH8D','2C8D','3C8D','4C8D','5C8D','6C8D','7C8D','8C8D','9C8D','TC8D','JC8D','QC8D','KC8D','AC8D','2S8D','3S8D','4S8D','5S8D','6S8D','7S8D','8S8D','9S8D','TS8D','JS8D','QS8D','KS8D','AS8D','2D9D','3D9D','4D9D','5D9D','6D9D','7D9D','8D9D','TD9D','JD9D','QD9D','KD9D','AD9D','2H9D','3H9D','4H9D','5H9D','6H9D','7H9D','8H9D','9H9D','TH9D','JH9D','QH9D','KH9D','AH9D','2C9D','3C9D','4C9D','5C9D','6C9D','7C9D','8C9D','9C9D','TC9D','JC9D','QC9D','KC9D','AC9D','2S9D','3S9D','4S9D','5S9D','6S9D','7S9D','8S9D','9S9D','TS9D','JS9D','QS9D','KS9D','AS9D','2DTD','3DTD','4DTD','5DTD','6DTD','7DTD','8DTD','9DTD','JDTD','QDTD','KDTD','ADTD','2HTD','3HTD','4HTD','5HTD','6HTD','7HTD','8HTD','9HTD','THTD','JHTD','QHTD','KHTD','AHTD','2CTD','3CTD','4CTD','5CTD','6CTD','7CTD','8CTD','9CTD','TCTD','JCTD','QCTD','KCTD','ACTD','2STD','3STD','4STD','5STD','6STD','7STD','8STD','9STD','TSTD','JSTD','QSTD','KSTD','ASTD','2DJD','3DJD','4DJD','5DJD','6DJD','7DJD','8DJD','9DJD','TDJD','QDJD','KDJD','ADJD','2HJD','3HJD','4HJD','5HJD','6HJD','7HJD','8HJD','9HJD','THJD','JHJD','QHJD','KHJD','AHJD','2CJD','3CJD','4CJD','5CJD','6CJD','7CJD','8CJD','9CJD','TCJD','JCJD','QCJD','KCJD','ACJD','2SJD','3SJD','4SJD','5SJD','6SJD','7SJD','8SJD','9SJD','TSJD','JSJD','QSJD','KSJD','ASJD','2DQD','3DQD','4DQD','5DQD','6DQD','7DQD','8DQD','9DQD','TDQD','JDQD','KDQD','ADQD','2HQD','3HQD','4HQD','5HQD','6HQD','7HQD','8HQD','9HQD','THQD','JHQD','QHQD','KHQD','AHQD','2CQD','3CQD','4CQD','5CQD','6CQD','7CQD','8CQD','9CQD','TCQD','JCQD','QCQD','KCQD','ACQD','2SQD','3SQD','4SQD','5SQD','6SQD','7SQD','8SQD','9SQD','TSQD','JSQD','QSQD','KSQD','ASQD','2DKD','3DKD','4DKD','5DKD','6DKD','7DKD','8DKD','9DKD','TDKD','JDKD','QDKD','ADKD','2HKD','3HKD','4HKD','5HKD','6HKD','7HKD','8HKD','9HKD','THKD','JHKD','QHKD','KHKD','AHKD','2CKD','3CKD','4CKD','5CKD','6CKD','7CKD','8CKD','9CKD','TCKD','JCKD','QCKD','KCKD','ACKD','2SKD','3SKD','4SKD','5SKD','6SKD','7SKD','8SKD','9SKD','TSKD','JSKD','QSKD','KSKD','ASKD','2DAD','3DAD','4DAD','5DAD','6DAD','7DAD','8DAD','9DAD','TDAD','JDAD','QDAD','KDAD','2HAD','3HAD','4HAD','5HAD','6HAD','7HAD','8HAD','9HAD','THAD','JHAD','QHAD','KHAD','AHAD','2CAD','3CAD','4CAD','5CAD','6CAD','7CAD','8CAD','9CAD','TCAD','JCAD','QCAD','KCAD','ACAD','2SAD','3SAD','4SAD','5SAD','6SAD','7SAD','8SAD','9SAD','TSAD','JSAD','QSAD','KSAD','ASAD','2D2H','3D2H','4D2H','5D2H','6D2H','7D2H','8D2H','9D2H','TD2H','JD2H','QD2H','KD2H','AD2H','3H2H','4H2H','5H2H','6H2H','7H2H','8H2H','9H2H','TH2H','JH2H','QH2H','KH2H','AH2H','2C2H','3C2H','4C2H','5C2H','6C2H','7C2H','8C2H','9C2H','TC2H','JC2H','QC2H','KC2H','AC2H','2S2H','3S2H','4S2H','5S2H','6S2H','7S2H','8S2H','9S2H','TS2H','JS2H','QS2H','KS2H','AS2H','2D3H','3D3H','4D3H','5D3H','6D3H','7D3H','8D3H','9D3H','TD3H','JD3H','QD3H','KD3H','AD3H','2H3H','4H3H','5H3H','6H3H','7H3H','8H3H','9H3H','TH3H','JH3H','QH3H','KH3H','AH3H','2C3H','3C3H','4C3H','5C3H','6C3H','7C3H','8C3H','9C3H','TC3H','JC3H','QC3H','KC3H','AC3H','2S3H','3S3H','4S3H','5S3H','6S3H','7S3H','8S3H','9S3H','TS3H','JS3H','QS3H','KS3H','AS3H','2D4H','3D4H','4D4H','5D4H','6D4H','7D4H','8D4H','9D4H','TD4H','JD4H','QD4H','KD4H','AD4H','2H4H','3H4H','5H4H','6H4H','7H4H','8H4H','9H4H','TH4H','JH4H','QH4H','KH4H','AH4H','2C4H','3C4H','4C4H','5C4H','6C4H','7C4H','8C4H','9C4H','TC4H','JC4H','QC4H','KC4H','AC4H','2S4H','3S4H','4S4H','5S4H','6S4H','7S4H','8S4H','9S4H','TS4H','JS4H','QS4H','KS4H','AS4H','2D5H','3D5H','4D5H','5D5H','6D5H','7D5H','8D5H','9D5H','TD5H','JD5H','QD5H','KD5H','AD5H','2H5H','3H5H','4H5H','6H5H','7H5H','8H5H','9H5H','TH5H','JH5H','QH5H','KH5H','AH5H','2C5H','3C5H','4C5H','5C5H','6C5H','7C5H','8C5H','9C5H','TC5H','JC5H','QC5H','KC5H','AC5H','2S5H','3S5H','4S5H','5S5H','6S5H','7S5H','8S5H','9S5H','TS5H','JS5H','QS5H','KS5H','AS5H','2D6H','3D6H','4D6H','5D6H','6D6H','7D6H','8D6H','9D6H','TD6H','JD6H','QD6H','KD6H','AD6H','2H6H','3H6H','4H6H','5H6H','7H6H','8H6H','9H6H','TH6H','JH6H','QH6H','KH6H','AH6H','2C6H','3C6H','4C6H','5C6H','6C6H','7C6H','8C6H','9C6H','TC6H','JC6H','QC6H','KC6H','AC6H','2S6H','3S6H','4S6H','5S6H','6S6H','7S6H','8S6H','9S6H','TS6H','JS6H','QS6H','KS6H','AS6H','2D7H','3D7H','4D7H','5D7H','6D7H','7D7H','8D7H','9D7H','TD7H','JD7H','QD7H','KD7H','AD7H','2H7H','3H7H','4H7H','5H7H','6H7H','8H7H','9H7H','TH7H','JH7H','QH7H','KH7H','AH7H','2C7H','3C7H','4C7H','5C7H','6C7H','7C7H','8C7H','9C7H','TC7H','JC7H','QC7H','KC7H','AC7H','2S7H','3S7H','4S7H','5S7H','6S7H','7S7H','8S7H','9S7H','TS7H','JS7H','QS7H','KS7H','AS7H','2D8H','3D8H','4D8H','5D8H','6D8H','7D8H','8D8H','9D8H','TD8H','JD8H','QD8H','KD8H','AD8H','2H8H','3H8H','4H8H','5H8H','6H8H','7H8H','9H8H','TH8H','JH8H','QH8H','KH8H','AH8H','2C8H','3C8H','4C8H','5C8H','6C8H','7C8H','8C8H','9C8H','TC8H','JC8H','QC8H','KC8H','AC8H','2S8H','3S8H','4S8H','5S8H','6S8H','7S8H','8S8H','9S8H','TS8H','JS8H','QS8H','KS8H','AS8H','2D9H','3D9H','4D9H','5D9H','6D9H','7D9H','8D9H','9D9H','TD9H','JD9H','QD9H','KD9H','AD9H','2H9H','3H9H','4H9H','5H9H','6H9H','7H9H','8H9H','TH9H','JH9H','QH9H','KH9H','AH9H','2C9H','3C9H','4C9H','5C9H','6C9H','7C9H','8C9H','9C9H','TC9H','JC9H','QC9H','KC9H','AC9H','2S9H','3S9H','4S9H','5S9H','6S9H','7S9H','8S9H','9S9H','TS9H','JS9H','QS9H','KS9H','AS9H','2DTH','3DTH','4DTH','5DTH','6DTH','7DTH','8DTH','9DTH','TDTH','JDTH','QDTH','KDTH','ADTH','2HTH','3HTH','4HTH','5HTH','6HTH','7HTH','8HTH','9HTH','JHTH','QHTH','KHTH','AHTH','2CTH','3CTH','4CTH','5CTH','6CTH','7CTH','8CTH','9CTH','TCTH','JCTH','QCTH','KCTH','ACTH','2STH','3STH','4STH','5STH','6STH','7STH','8STH','9STH','TSTH','JSTH','QSTH','KSTH','ASTH','2DJH','3DJH','4DJH','5DJH','6DJH','7DJH','8DJH','9DJH','TDJH','JDJH','QDJH','KDJH','ADJH','2HJH','3HJH','4HJH','5HJH','6HJH','7HJH','8HJH','9HJH','THJH','QHJH','KHJH','AHJH','2CJH','3CJH','4CJH','5CJH','6CJH','7CJH','8CJH','9CJH','TCJH','JCJH','QCJH','KCJH','ACJH','2SJH','3SJH','4SJH','5SJH','6SJH','7SJH','8SJH','9SJH','TSJH','JSJH','QSJH','KSJH','ASJH','2DQH','3DQH','4DQH','5DQH','6DQH','7DQH','8DQH','9DQH','TDQH','JDQH','QDQH','KDQH','ADQH','2HQH','3HQH','4HQH','5HQH','6HQH','7HQH','8HQH','9HQH','THQH','JHQH','KHQH','AHQH','2CQH','3CQH','4CQH','5CQH','6CQH','7CQH','8CQH','9CQH','TCQH','JCQH','QCQH','KCQH','ACQH','2SQH','3SQH','4SQH','5SQH','6SQH','7SQH','8SQH','9SQH','TSQH','JSQH','QSQH','KSQH','ASQH','2DKH','3DKH','4DKH','5DKH','6DKH','7DKH','8DKH','9DKH','TDKH','JDKH','QDKH','KDKH','ADKH','2HKH','3HKH','4HKH','5HKH','6HKH','7HKH','8HKH','9HKH','THKH','JHKH','QHKH','AHKH','2CKH','3CKH','4CKH','5CKH','6CKH','7CKH','8CKH','9CKH','TCKH','JCKH','QCKH','KCKH','ACKH','2SKH','3SKH','4SKH','5SKH','6SKH','7SKH','8SKH','9SKH','TSKH','JSKH','QSKH','KSKH','ASKH','2DAH','3DAH','4DAH','5DAH','6DAH','7DAH','8DAH','9DAH','TDAH','JDAH','QDAH','KDAH','ADAH','2HAH','3HAH','4HAH','5HAH','6HAH','7HAH','8HAH','9HAH','THAH','JHAH','QHAH','KHAH','2CAH','3CAH','4CAH','5CAH','6CAH','7CAH','8CAH','9CAH','TCAH','JCAH','QCAH','KCAH','ACAH','2SAH','3SAH','4SAH','5SAH','6SAH','7SAH','8SAH','9SAH','TSAH','JSAH','QSAH','KSAH','ASAH','2D2C','3D2C','4D2C','5D2C','6D2C','7D2C','8D2C','9D2C','TD2C','JD2C','QD2C','KD2C','AD2C','2H2C','3H2C','4H2C','5H2C','6H2C','7H2C','8H2C','9H2C','TH2C','JH2C','QH2C','KH2C','AH2C','3C2C','4C2C','5C2C','6C2C','7C2C','8C2C','9C2C','TC2C','JC2C','QC2C','KC2C','AC2C','2S2C','3S2C','4S2C','5S2C','6S2C','7S2C','8S2C','9S2C','TS2C','JS2C','QS2C','KS2C','AS2C','2D3C','3D3C','4D3C','5D3C','6D3C','7D3C','8D3C','9D3C','TD3C','JD3C','QD3C','KD3C','AD3C','2H3C','3H3C','4H3C','5H3C','6H3C','7H3C','8H3C','9H3C','TH3C','JH3C','QH3C','KH3C','AH3C','2C3C','4C3C','5C3C','6C3C','7C3C','8C3C','9C3C','TC3C','JC3C','QC3C','KC3C','AC3C','2S3C','3S3C','4S3C','5S3C','6S3C','7S3C','8S3C','9S3C','TS3C','JS3C','QS3C','KS3C','AS3C','2D4C','3D4C','4D4C','5D4C','6D4C','7D4C','8D4C','9D4C','TD4C','JD4C','QD4C','KD4C','AD4C','2H4C','3H4C','4H4C','5H4C','6H4C','7H4C','8H4C','9H4C','TH4C','JH4C','QH4C','KH4C','AH4C','2C4C','3C4C','5C4C','6C4C','7C4C','8C4C','9C4C','TC4C','JC4C','QC4C','KC4C','AC4C','2S4C','3S4C','4S4C','5S4C','6S4C','7S4C','8S4C','9S4C','TS4C','JS4C','QS4C','KS4C','AS4C','2D5C','3D5C','4D5C','5D5C','6D5C','7D5C','8D5C','9D5C','TD5C','JD5C','QD5C','KD5C','AD5C','2H5C','3H5C','4H5C','5H5C','6H5C','7H5C','8H5C','9H5C','TH5C','JH5C','QH5C','KH5C','AH5C','2C5C','3C5C','4C5C','6C5C','7C5C','8C5C','9C5C','TC5C','JC5C','QC5C','KC5C','AC5C','2S5C','3S5C','4S5C','5S5C','6S5C','7S5C','8S5C','9S5C','TS5C','JS5C','QS5C','KS5C','AS5C','2D6C','3D6C','4D6C','5D6C','6D6C','7D6C','8D6C','9D6C','TD6C','JD6C','QD6C','KD6C','AD6C','2H6C','3H6C','4H6C','5H6C','6H6C','7H6C','8H6C','9H6C','TH6C','JH6C','QH6C','KH6C','AH6C','2C6C','3C6C','4C6C','5C6C','7C6C','8C6C','9C6C','TC6C','JC6C','QC6C','KC6C','AC6C','2S6C','3S6C','4S6C','5S6C','6S6C','7S6C','8S6C','9S6C','TS6C','JS6C','QS6C','KS6C','AS6C','2D7C','3D7C','4D7C','5D7C','6D7C','7D7C','8D7C','9D7C','TD7C','JD7C','QD7C','KD7C','AD7C','2H7C','3H7C','4H7C','5H7C','6H7C','7H7C','8H7C','9H7C','TH7C','JH7C','QH7C','KH7C','AH7C','2C7C','3C7C','4C7C','5C7C','6C7C','8C7C','9C7C','TC7C','JC7C','QC7C','KC7C','AC7C','2S7C','3S7C','4S7C','5S7C','6S7C','7S7C','8S7C','9S7C','TS7C','JS7C','QS7C','KS7C','AS7C','2D8C','3D8C','4D8C','5D8C','6D8C','7D8C','8D8C','9D8C','TD8C','JD8C','QD8C','KD8C','AD8C','2H8C','3H8C','4H8C','5H8C','6H8C','7H8C','8H8C','9H8C','TH8C','JH8C','QH8C','KH8C','AH8C','2C8C','3C8C','4C8C','5C8C','6C8C','7C8C','9C8C','TC8C','JC8C','QC8C','KC8C','AC8C','2S8C','3S8C','4S8C','5S8C','6S8C','7S8C','8S8C','9S8C','TS8C','JS8C','QS8C','KS8C','AS8C','2D9C','3D9C','4D9C','5D9C','6D9C','7D9C','8D9C','9D9C','TD9C','JD9C','QD9C','KD9C','AD9C','2H9C','3H9C','4H9C','5H9C','6H9C','7H9C','8H9C','9H9C','TH9C','JH9C','QH9C','KH9C','AH9C','2C9C','3C9C','4C9C','5C9C','6C9C','7C9C','8C9C','TC9C','JC9C','QC9C','KC9C','AC9C','2S9C','3S9C','4S9C','5S9C','6S9C','7S9C','8S9C','9S9C','TS9C','JS9C','QS9C','KS9C','AS9C','2DTC','3DTC','4DTC','5DTC','6DTC','7DTC','8DTC','9DTC','TDTC','JDTC','QDTC','KDTC','ADTC','2HTC','3HTC','4HTC','5HTC','6HTC','7HTC','8HTC','9HTC','THTC','JHTC','QHTC','KHTC','AHTC','2CTC','3CTC','4CTC','5CTC','6CTC','7CTC','8CTC','9CTC','JCTC','QCTC','KCTC','ACTC','2STC','3STC','4STC','5STC','6STC','7STC','8STC','9STC','TSTC','JSTC','QSTC','KSTC','ASTC','2DJC','3DJC','4DJC','5DJC','6DJC','7DJC','8DJC','9DJC','TDJC','JDJC','QDJC','KDJC','ADJC','2HJC','3HJC','4HJC','5HJC','6HJC','7HJC','8HJC','9HJC','THJC','JHJC','QHJC','KHJC','AHJC','2CJC','3CJC','4CJC','5CJC','6CJC','7CJC','8CJC','9CJC','TCJC','QCJC','KCJC','ACJC','2SJC','3SJC','4SJC','5SJC','6SJC','7SJC','8SJC','9SJC','TSJC','JSJC','QSJC','KSJC','ASJC','2DQC','3DQC','4DQC','5DQC','6DQC','7DQC','8DQC','9DQC','TDQC','JDQC','QDQC','KDQC','ADQC','2HQC','3HQC','4HQC','5HQC','6HQC','7HQC','8HQC','9HQC','THQC','JHQC','QHQC','KHQC','AHQC','2CQC','3CQC','4CQC','5CQC','6CQC','7CQC','8CQC','9CQC','TCQC','JCQC','KCQC','ACQC','2SQC','3SQC','4SQC','5SQC','6SQC','7SQC','8SQC','9SQC','TSQC','JSQC','QSQC','KSQC','ASQC','2DKC','3DKC','4DKC','5DKC','6DKC','7DKC','8DKC','9DKC','TDKC','JDKC','QDKC','KDKC','ADKC','2HKC','3HKC','4HKC','5HKC','6HKC','7HKC','8HKC','9HKC','THKC','JHKC','QHKC','KHKC','AHKC','2CKC','3CKC','4CKC','5CKC','6CKC','7CKC','8CKC','9CKC','TCKC','JCKC','QCKC','ACKC','2SKC','3SKC','4SKC','5SKC','6SKC','7SKC','8SKC','9SKC','TSKC','JSKC','QSKC','KSKC','ASKC','2DAC','3DAC','4DAC','5DAC','6DAC','7DAC','8DAC','9DAC','TDAC','JDAC','QDAC','KDAC','ADAC','2HAC','3HAC','4HAC','5HAC','6HAC','7HAC','8HAC','9HAC','THAC','JHAC','QHAC','KHAC','AHAC','2CAC','3CAC','4CAC','5CAC','6CAC','7CAC','8CAC','9CAC','TCAC','JCAC','QCAC','KCAC','2SAC','3SAC','4SAC','5SAC','6SAC','7SAC','8SAC','9SAC','TSAC','JSAC','QSAC','KSAC','ASAC','2D2S','3D2S','4D2S','5D2S','6D2S','7D2S','8D2S','9D2S','TD2S','JD2S','QD2S','KD2S','AD2S','2H2S','3H2S','4H2S','5H2S','6H2S','7H2S','8H2S','9H2S','TH2S','JH2S','QH2S','KH2S','AH2S','2C2S','3C2S','4C2S','5C2S','6C2S','7C2S','8C2S','9C2S','TC2S','JC2S','QC2S','KC2S','AC2S','3S2S','4S2S','5S2S','6S2S','7S2S','8S2S','9S2S','TS2S','JS2S','QS2S','KS2S','AS2S','2D3S','3D3S','4D3S','5D3S','6D3S','7D3S','8D3S','9D3S','TD3S','JD3S','QD3S','KD3S','AD3S','2H3S','3H3S','4H3S','5H3S','6H3S','7H3S','8H3S','9H3S','TH3S','JH3S','QH3S','KH3S','AH3S','2C3S','3C3S','4C3S','5C3S','6C3S','7C3S','8C3S','9C3S','TC3S','JC3S','QC3S','KC3S','AC3S','2S3S','4S3S','5S3S','6S3S','7S3S','8S3S','9S3S','TS3S','JS3S','QS3S','KS3S','AS3S','2D4S','3D4S','4D4S','5D4S','6D4S','7D4S','8D4S','9D4S','TD4S','JD4S','QD4S','KD4S','AD4S','2H4S','3H4S','4H4S','5H4S','6H4S','7H4S','8H4S','9H4S','TH4S','JH4S','QH4S','KH4S','AH4S','2C4S','3C4S','4C4S','5C4S','6C4S','7C4S','8C4S','9C4S','TC4S','JC4S','QC4S','KC4S','AC4S','2S4S','3S4S','5S4S','6S4S','7S4S','8S4S','9S4S','TS4S','JS4S','QS4S','KS4S','AS4S','2D5S','3D5S','4D5S','5D5S','6D5S','7D5S','8D5S','9D5S','TD5S','JD5S','QD5S','KD5S','AD5S','2H5S','3H5S','4H5S','5H5S','6H5S','7H5S','8H5S','9H5S','TH5S','JH5S','QH5S','KH5S','AH5S','2C5S','3C5S','4C5S','5C5S','6C5S','7C5S','8C5S','9C5S','TC5S','JC5S','QC5S','KC5S','AC5S','2S5S','3S5S','4S5S','6S5S','7S5S','8S5S','9S5S','TS5S','JS5S','QS5S','KS5S','AS5S','2D6S','3D6S','4D6S','5D6S','6D6S','7D6S','8D6S','9D6S','TD6S','JD6S','QD6S','KD6S','AD6S','2H6S','3H6S','4H6S','5H6S','6H6S','7H6S','8H6S','9H6S','TH6S','JH6S','QH6S','KH6S','AH6S','2C6S','3C6S','4C6S','5C6S','6C6S','7C6S','8C6S','9C6S','TC6S','JC6S','QC6S','KC6S','AC6S','2S6S','3S6S','4S6S','5S6S','7S6S','8S6S','9S6S','TS6S','JS6S','QS6S','KS6S','AS6S','2D7S','3D7S','4D7S','5D7S','6D7S','7D7S','8D7S','9D7S','TD7S','JD7S','QD7S','KD7S','AD7S','2H7S','3H7S','4H7S','5H7S','6H7S','7H7S','8H7S','9H7S','TH7S','JH7S','QH7S','KH7S','AH7S','2C7S','3C7S','4C7S','5C7S','6C7S','7C7S','8C7S','9C7S','TC7S','JC7S','QC7S','KC7S','AC7S','2S7S','3S7S','4S7S','5S7S','6S7S','8S7S','9S7S','TS7S','JS7S','QS7S','KS7S','AS7S','2D8S','3D8S','4D8S','5D8S','6D8S','7D8S','8D8S','9D8S','TD8S','JD8S','QD8S','KD8S','AD8S','2H8S','3H8S','4H8S','5H8S','6H8S','7H8S','8H8S','9H8S','TH8S','JH8S','QH8S','KH8S','AH8S','2C8S','3C8S','4C8S','5C8S','6C8S','7C8S','8C8S','9C8S','TC8S','JC8S','QC8S','KC8S','AC8S','2S8S','3S8S','4S8S','5S8S','6S8S','7S8S','9S8S','TS8S','JS8S','QS8S','KS8S','AS8S','2D9S','3D9S','4D9S','5D9S','6D9S','7D9S','8D9S','9D9S','TD9S','JD9S','QD9S','KD9S','AD9S','2H9S','3H9S','4H9S','5H9S','6H9S','7H9S','8H9S','9H9S','TH9S','JH9S','QH9S','KH9S','AH9S','2C9S','3C9S','4C9S','5C9S','6C9S','7C9S','8C9S','9C9S','TC9S','JC9S','QC9S','KC9S','AC9S','2S9S','3S9S','4S9S','5S9S','6S9S','7S9S','8S9S','TS9S','JS9S','QS9S','KS9S','AS9S','2DTS','3DTS','4DTS','5DTS','6DTS','7DTS','8DTS','9DTS','TDTS','JDTS','QDTS','KDTS','ADTS','2HTS','3HTS','4HTS','5HTS','6HTS','7HTS','8HTS','9HTS','THTS','JHTS','QHTS','KHTS','AHTS','2CTS','3CTS','4CTS','5CTS','6CTS','7CTS','8CTS','9CTS','TCTS','JCTS','QCTS','KCTS','ACTS','2STS','3STS','4STS','5STS','6STS','7STS','8STS','9STS','JSTS','QSTS','KSTS','ASTS','2DJS','3DJS','4DJS','5DJS','6DJS','7DJS','8DJS','9DJS','TDJS','JDJS','QDJS','KDJS','ADJS','2HJS','3HJS','4HJS','5HJS','6HJS','7HJS','8HJS','9HJS','THJS','JHJS','QHJS','KHJS','AHJS','2CJS','3CJS','4CJS','5CJS','6CJS','7CJS','8CJS','9CJS','TCJS','JCJS','QCJS','KCJS','ACJS','2SJS','3SJS','4SJS','5SJS','6SJS','7SJS','8SJS','9SJS','TSJS','QSJS','KSJS','ASJS','2DQS','3DQS','4DQS','5DQS','6DQS','7DQS','8DQS','9DQS','TDQS','JDQS','QDQS','KDQS','ADQS','2HQS','3HQS','4HQS','5HQS','6HQS','7HQS','8HQS','9HQS','THQS','JHQS','QHQS','KHQS','AHQS','2CQS','3CQS','4CQS','5CQS','6CQS','7CQS','8CQS','9CQS','TCQS','JCQS','QCQS','KCQS','ACQS','2SQS','3SQS','4SQS','5SQS','6SQS','7SQS','8SQS','9SQS','TSQS','JSQS','KSQS','ASQS','2DKS','3DKS','4DKS','5DKS','6DKS','7DKS','8DKS','9DKS','TDKS','JDKS','QDKS','KDKS','ADKS','2HKS','3HKS','4HKS','5HKS','6HKS','7HKS','8HKS','9HKS','THKS','JHKS','QHKS','KHKS','AHKS','2CKS','3CKS','4CKS','5CKS','6CKS','7CKS','8CKS','9CKS','TCKS','JCKS','QCKS','KCKS','ACKS','2SKS','3SKS','4SKS','5SKS','6SKS','7SKS','8SKS','9SKS','TSKS','JSKS','QSKS','ASKS','2DAS','3DAS','4DAS','5DAS','6DAS','7DAS','8DAS','9DAS','TDAS','JDAS','QDAS','KDAS','ADAS','2HAS','3HAS','4HAS','5HAS','6HAS','7HAS','8HAS','9HAS','THAS','JHAS','QHAS','KHAS','AHAS','2CAS','3CAS','4CAS','5CAS','6CAS','7CAS','8CAS','9CAS','TCAS','JCAS','QCAS','KCAS','ACAS','2SAS','3SAS','4SAS','5SAS','6SAS','7SAS','8SAS','9SAS','TSAS','JSAS','QSAS','KSAS']

const loopThroughCombinations = function(twoCards) {
	const deck = [
        cards,
        cards,
        cards
    ];
    let combinations = [''];

    for (let i = 0; i < deck.length; i++) {
        let deckCard = deck[i];
        let tempArray = [];
        let tempObj = {};

        for (let j = 0; j < deckCard.length; j++) {
            let cardToAdd = deckCard[j];

            if (twoCards.indexOf(cardToAdd) > -1) {

            } else {
                for (let k = 0; k < combinations.length; k++) {
                    let combination = combinations[k];

                    if (combination.indexOf(cardToAdd) > -1) {

                    } else {
                        if (combination.length < 4){
                            tempArray.push(combination + cardToAdd);
                        } else {
                            
                            tempArray.push(combination + cardToAdd + twoCards);

                        }
                    }
                }
            }
        }

        combinations = tempArray;
    }
    //console.log(combinations);
    //return combinations;
};

const assignHandValue = function(hand) {
    if (isForRoyalFlush(hand)) {
        return findHighCard(hand, 649740, "royal flush");
    }

    if (isStraightFlush(hand)) {
        return findHighCard(hand, 72192, name: "straight flush");
    }

    if (isFourOfAKind(hand)) {
        return findHighCard(hand, 4165, name: "four of a kind");
    }

    if (isFullHouse(hand)) {
        return findHighCard(hand, 693, name: "full house");
    }

    if (isAFlush(hand)) {
        return findHighCard(hand, 508, name: "flush");
    }

    if (isAStaight(hand)) {
        return findHighCard(hand, 254, name: "straight");
    }

    if (isThreeOfAKind(hand)) {
        return findHighCard(hand, 46, name: "three of a kind");
    }

    if (isTwoPair(hand)) {
        return findHighCard(hand, 21, name: "two pair");
    }

    if (isOnePair(hand)) {
        return findHighCard(hand, 1, name: "pair");
    }

    return findHighCard(hand, 0, "high card");

}

const isForRoyalFlush = function(hand) {
    if (
        hand.indexOf('AC') > -1 &&
        hand.indexOf('KC') > -1 &&
        hand.indexOf('QC') > -1 &&
        hand.indexOf('JC') > -1 &&
        hand.indexOf('TC') > -1 &&
    ) {return true;}

    if (
        hand.indexOf('AS') > -1 &&
        hand.indexOf('KS') > -1 &&
        hand.indexOf('QS') > -1 &&
        hand.indexOf('JS') > -1 &&
        hand.indexOf('TS') > -1 &&
    ) {return true;}

    if (
        hand.indexOf('AD') > -1 &&
        hand.indexOf('KD') > -1 &&
        hand.indexOf('QD') > -1 &&
        hand.indexOf('JD') > -1 &&
        hand.indexOf('TD') > -1 &&
    ) {return true;}

    if (
        hand.indexOf('AH') > -1 &&
        hand.indexOf('KH') > -1 &&
        hand.indexOf('QH') > -1 &&
        hand.indexOf('JH') > -1 &&
        hand.indexOf('TH') > -1 &&
    ) {return true;}

    return false;
}


const isStraightFlush = function(hand) {
    if (!isAFlush(hand)) {
        return false;
    }

    if (!isAStaight(hand)) {
        return false;
    }
    
    return true;
}

const isFourOfAKind = function(hand) {
    return checkForPair(hand, 4);
}

const isFullHouse = function(hand) {

}

const isAFlush = function(hand) {
    let handArr = hand.split('');
    let cardSuit = handArr[1];

    if (
        handArr[3] === cardSuit &&
        handArr[5] === cardSuit &&
        handArr[7] === cardSuit &&
        handArr[9] === cardSuit &&
    ) {return true;}

    return false;
}

const isAStaight = function(hand) {

}

const isThreeOfAKind = function(hand) {
    return checkForPair(hand, 3);
}

const isTwoPair = function(hand) {
    
}

const isOnePair = function(hand) {
    return checkForPair(hand, 2);
}

const findHighCard = function(hand, exsistingValue, handName) {

}

const checkForPair = function(hand, numberOfMatches) {
    let handArr = hand.split('');

    for (let i = 0; i < handArr.length; i++) {
        let card = handArr[i];
        let regExCard = new RegExp(card,"g");

        if(hand.match(regExCard).length === numberOfMatches) {
            return true;
        }
    }

    return false;
}

for (let i = 0; i < twoCardCombos.length; i++) {
    if (i >= 0 && i < 200) {
        handCombinationsGenerator(twoCardCombos[i]);
    }
}