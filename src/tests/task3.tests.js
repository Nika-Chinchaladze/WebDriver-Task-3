const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Test Google Cloud Page", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        // await browser.url("https://cloud.google.com/");
        await browser.url("https://cloud.google.com/search?hl=en&q=Google%20Cloud%20Platform%20Pricing%20Calculator");
    });

    it("should test Google Cloud Platform Pricing Calculator", async () => {
        // Act
        // await $(".DPvwYc").click();
        // await $("#i4").setValue("Google Cloud Platform Pricing Calculator");
        // await browser.keys("Enter");

        await page("search").pricingCalculator.click();
        await page("estimate").addEstimate.click();

        const computeEngine = await page("engine").computeEngine;
        await browser.execute((el) => el.click(), computeEngine);

        // Fill form
        await page("form").numberInstance.setValue(4);

        const operationalSystemList = await page("form").operationalSystemList;
        await browser.execute((el) => el.click(), operationalSystemList);

        const operationalSystemType = await page("form").operationalSystemType;
        await browser.execute((el) => el.click(), operationalSystemType);

        await page("form").provisionModelRegular.click();

        const machineFamilyList = await page("form").machineFamilyList;
        await browser.execute((el) => el.click(), machineFamilyList);

        const machineFamilyType = await page("form").machineFamilyType;
        await browser.execute((el) => el.click(), machineFamilyType);
        
        const seriesList = await page("form").seriesList;
        await browser.execute((el) => el.click(), seriesList);

        const seriesN1 = await page("form").seriesN1;
        await browser.execute((el) => el.click(), seriesN1);

        const machineList = await page("form").machineList;
        await browser.execute((el) => el.click(), machineList);

        const machineType = await page("form").machineType;
        await browser.execute((el) => el.click(), machineType);

        const switchCPUbtn = await page("form").switchCPUbtn;
        await browser.execute((el) => el.click(), switchCPUbtn);

        const cpuList = await page("form").cpuList;
        await browser.execute((el) => el.click(), cpuList);

        const cpuType = await page("form").cpuType;
        await browser.execute((el) => el.click(), cpuType);

        const cpuNumberList = await page("form").cpuNumberList;
        await browser.execute((el) => el.click(), cpuNumberList);

        const cpuNumberType = await page("form").cpuNumberType;
        await browser.execute((el) => el.click(), cpuNumberType);

        const localSsdList = await page("form").localSsdList;
        await browser.execute((el) => el.click(), localSsdList);

        const localSsdType = await page("form").localSsdType;
        await browser.execute((el) => el.click(), localSsdType);

        const regionList = await page("form").regionList;
        await browser.execute((el) => el.click(), regionList);

        const regionType = await page("form").regionType;
        await browser.execute((el) => el.click(), regionType);

        await page("form").oneYear.click();

        await browser.pause(5000);

        // Assert
        const calculatedPrice = await page("total").calculatedPrice;
        expect(calculatedPrice).toExist();
        expect(calculatedPrice).toBeDisplayed();

    });
});
