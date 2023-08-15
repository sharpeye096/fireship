var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
const appTypes = ["edgeChromium", "weather", "windowsShell"];
function reportUrl(appType) {
    return `https://assets.msn.com/bundles/v1/${appType}/latest/report.json`;
}
function getReport(appType) {
    return fetch(reportUrl(appType))
        .then((response) => response.json())
        .then((json) => json);
}
function report() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [...appTypes.map(app => getReport(app))];
        const reports = yield Promise.all(tasks);
        const sizes = reports.map(analysisReport);
        for (let i = 0; i < 3; i++) {
            console.log(appTypes[i] + " " + sizes[i].totalNumber + " bundles, " + sizes[i].totalSize.toLocaleString("en-US") + " bytes");
        }
    });
}
function analysisReport(report) {
    const totalNumber = report.length;
    const totalSize = report.reduce((acc, cur) => acc + cur.parsedSize, 0);
    return { totalNumber, totalSize };
}
report();
