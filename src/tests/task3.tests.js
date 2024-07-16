const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Test Google Cloud Page", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        const basicURL = "https://cloud.google.com/";
        const secondaryURL = "https://cloud.google.com/search?hl=en&q=Google%20Cloud%20Platform%20Pricing%20Calculator";

        // await browser.url(basicURL);
        // await page("header").searchIcon.click();
        // await page("header").searchInput.setValue("Google Cloud Platform Pricing Calculator");
        // await browser.keys("Enter");

        await browser.url(secondaryURL);
        
    });

    it("should test Google Cloud Platform Pricing Calculator", async () => {
        // Act
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

        const regular = await page("form").provisionModelRegular;
        await browser.execute((el) => el.click(), regular);

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
        await browser.pause(1000);

        // Assert
        const calculatedPrice = await page("total").calculatedPrice;
        expect(calculatedPrice).toExist();
        expect(calculatedPrice).toBeDisplayed();

        await page("total").shareBtn.click();
        
        const openEstimateBtn = await page("window").openEstimateSum;
        await browser.execute((el) => el.click(), openEstimateBtn);

        // switch to new tab
        const newTab = await browser.getWindowHandles();
        await browser.switchToWindow(newTab[newTab.length - 1]);

        // Number of Instances - 4
        const numberOfInstance = await page("outcome").numberOfInstance.getText();
        expect(numberOfInstance).toBe("4");

        // Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
        const operatingSystem = await page("outcome").operatingSystem.getText();
        expect(operatingSystem).toContain("Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)");

        // Provisioning model: Regular
        const provisionModel = await page("outcome").provisionModel.getText();
        expect(provisionModel).toHaveText("Regular");

        // Machine Family: General purpose
        // Series: N1

        // Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        const machineTypeFinal = await page("outcome").machineTypeFinal.getText();
        expect(machineTypeFinal).toContain("n1-standard-8, vCPUs: 8, RAM: 30 GB");

        // GPU type: NVIDIA Tesla V100
        const cpuModel = await page("outcome").cpuModel.getText();
        expect(cpuModel).toContain("NVIDIA TESLA");

        // Number of GPUs: 1
        const numberOfCPU = await page("outcome").numberOfCPU.getText();
        expect(numberOfCPU).toBe("1");

        // Local SSD: 2x375 Gb
        const localSSD = await page("outcome").localSSD.getText();
        expect(localSSD).toContain("2x375");

        // Datacenter location: Frankfurt (europe-west3)
        const region = await page("outcome").region.getText();
        expect(region).toContain("europe-west");

        // Committed usage: 1 Year
        const commitYear = await page("outcome").commitYear.getText();
        expect(commitYear).toContain("1");
    });
});
