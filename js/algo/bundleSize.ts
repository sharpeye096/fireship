import fetch from "node-fetch";

const appTypes = ["edgeChromium", "weather", "windowsShell"];

function reportUrl(appType: string): string {
    return `https://assets.msn.com/bundles/v1/${appType}/latest/report.json`;
}

type BundleReport = {
    label: string;
    parsedSize: number;
};

function getReport(appType: string): Promise<BundleReport[]> {
    return fetch(reportUrl(appType))
        .then((response) => response.json())
        .then((json) => json as BundleReport[]);
}

async function report() {
    const tasks = [...appTypes.map(app=>getReport(app))];
    const reports = await Promise.all(tasks);

    const sizes = reports.map(analysisReport);

    for(let i=0;i<3;i++) {
        console.log(appTypes[i]+" "+sizes[i].totalNumber+ " bundles, "+sizes[i].totalSize.toLocaleString("en-US")+" bytes")
    }
    
}

function analysisReport(report: BundleReport[]) {
    const totalNumber = report.length;

    const totalSize = report.reduce((acc, cur) => acc + cur.parsedSize, 0);

    return {totalNumber, totalSize};
}

report();