export class Summary {
    total = 0;
    confirmedCasesIndian = 0;
    confirmedCasesForeign = 0;
    discharged = 0;
    deaths = 0;
    confirmedButLocationUnidentified = 0;
}

export class StateWiseSummary {
    confirmedCasesForeign = 0
    confirmedCasesIndian = 0;
    deaths = 0;
    discharged = 0;
    loc = ""
    totalConfirmed = 0;
}

export class historicalData {
    day = "";
    regional: StateWiseSummary;
    summary: Summary;
}

export class barCharData {
    day = [];
    regional = [];
}

export class HospitalAndBed {
    regional = [];
    sources = [];
    summary = [];
    lastOriginUpdate = '';
    lastRefreshed = '';
}

export class RegionalHospitalAndBed {
    asOn = []
    ruralBeds = [];
    ruralHospitals = [];
    state = [];
    totalBeds = [];
    totalHospitals = [];
    urbanBeds = [];
    urbanHospitals = [];
}

export class RegionalHospitalAndBedModel {
    asOn: any;
    ruralBeds: any;
    ruralHospitals: any;
    state: any;
    totalBeds: any;
    totalHospitals: any;
    urbanBeds: any;
    urbanHospitals: any;
}

export class lineGraphModel {
    data = [];
    label = '';
}