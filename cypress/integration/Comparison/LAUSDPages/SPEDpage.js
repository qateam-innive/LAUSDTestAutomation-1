
/// <reference types="Cypress" />


class SPEDPages {

    verifySPEDpagelaunch() {
        const SPED = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(4) > .b-icon-mask'
        cy.click(SPED)
    }
    navigatingtoIEPtimelinepage() {
        const ieptimeline = 'div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(1) > div.b-icon > img'
        const iedptimelinepagetitle = 'p.title'
        const iedptimelinepagesubtitle = 'p.subtitle'

        cy.pagelaunch(ieptimeline)

        cy.invoketext('{', iedptimelinepagetitle, 'result1', 'spedpagetitletext', ',')
        cy.invoketext(',', iedptimelinepagesubtitle, 'result1', 'spedpagesubtitletext', ',')
    }

    verifymetricsataglance() {
        const listofmetrics = 'section > div.kpi-header > span'
        const listofmetricsdata = 'section > div.kpi-main > div.kpi-actual > div > span'
        const metricsprefix = 'section:nth-child('
        const metricssuffix = ') div.kpi-header > span'
        const metricsdataprefix = 'section:nth-child('
        const metricsdatasuffix = ') div.kpi-main > div.kpi-actual > div > span'
        cy.verifylist(',', listofmetrics, metricsprefix, metricssuffix, 'result1', 'metrictitle', ',')
        cy.verifylist(',', listofmetricsdata, metricsdataprefix, metricsdatasuffix, 'result1', 'metricdata', ',')
    }
    verifyoperationaldashboard() {
        const listofoperationaldashboard = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const operationalprefix = 'div.b-mega-menu-pages > div:nth-child('
        const operationalsuffix = ') > div.brintell-framework-botton-tile-name'
        cy.verifylist(',', listofoperationaldashboard, operationalprefix, operationalsuffix, 'result1', 'operationaldashboard', ',')
    }

    verifySWDreports() {
        const swdreport = '//span[contains(text(),"SWD reports")]'
        const listofswdreport = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const swdreportprefix = 'div.b-mega-menu-pages > div:nth-child('
        const swdreportsuffix = ') > div.brintell-framework-botton-tile-name'
        cy.xpath(swdreport).click()
        cy.wait(5000)
        cy.verifylist(',', listofswdreport, swdreportprefix, swdreportsuffix, 'result1', 'swdreport', ',')
    }
   
    verifySWDServicesreports() {
        const swdservicesreport = '//span[contains(text(),"SWD Services reports")]'
        const listofswdservicesreport = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const swdservicesreportprefix = 'div.b-mega-menu-pages > div:nth-child('
        const swdservicesreportsuffix = ') > div.brintell-framework-botton-tile-name'
        cy.xpath(swdservicesreport).click()
        cy.wait(5000)
        cy.verifylist(',', listofswdservicesreport, swdservicesreportprefix, swdservicesreportsuffix, 'result1', 'swdservicesreport', ',')
    }

    verifyFingertipFacts() {
        const fingertipfacts = '//span[contains(text(),"SWD Services reports")]'
        const listoffingertipfacts = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
        const fingertipfactsprefix = 'div.b-mega-menu-pages > div:nth-child('
        const fingertipfactssuffix = ') > div.brintell-framework-botton-tile-name'
        cy.xpath(fingertipfacts).click()
        cy.wait(5000)
        cy.verifylist(',', listoffingertipfacts, fingertipfactsprefix, fingertipfactssuffix, 'result1', 'fingertipfacts', ',')
    }

    navigatingtocentralofficedashboard() {
        const centraldashboard = 'div.b-mega-menu-pages > div:nth-child(1) > div.brintell-framework-botton-tile-name'
        const centraldashboardtitle = 'div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
        cy.pagelaunch(centraldashboard)
        cy.invoketext(',', centraldashboardtitle, 'result1', 'centraldashboardtitle', ',')
   
    }
    
    verifytimetrendinghistoricalweeklyview() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
        const listbuttons = '((//div[@class="switcher-container-content"])[1]//div[@class="switcher-container-icons"])[1]//button'
        const buttonprefix = '(((//div[@class="switcher-container-content"])[1]//div[@class="switcher-container-icons"])[1]//button)['
        const buttonsuffix = ']'
          cy.verifylist(',', listbuttons, buttonprefix, buttonsuffix, 'result1', 'timetrendswitcherbuttons', ',')
        
    
    }

    verifytimetrendinghistoricalweeklyview_graph() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
        
    }

    verifytimetrendinghistoricalweeklyview_overduetable() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
        const listheader = '(((//div[@class="switcher-container-content"])[1]//td[@class="PTChildPivotTable"])[1]//tr)[1]//td[contains(@class,"mPTHC PTCHC0")]'
    }

    verifytimetrendinghistoricalweeklyview_actionrequiredtable() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
    }

    verifylocaldistrictview() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
   
        const listbuttons = '((//div[@class="switcher-container-content"])[1]//div[@class="switcher-container-icons"])[1]//button'
        const buttonprefix = '(((//div[@class="switcher-container-content"])[1]//div[@class="switcher-container-icons"])[1]//button)['
        const buttonsuffix = ']'
          cy.verifylist(',', listbuttons, buttonprefix, buttonsuffix, 'result1', 'timetrendswitcherbuttons', ',')
    }

    verifyschoolview() {
        const timetrendchart = 'div.basic-container-container > div:nth-child(3) > section > div > div > section > div:nth-child(2) > div'
        cy.get(timetrendchart).should('be.visible')
        const listbuttons = '((//div[@class="switcher-container-content"])[1]//div[@class="switcher-container-icons"])[1]//button'
        const buttonprefix = '(((//div[@class="switcher-container-content"])[1]//div[@class="switcher-container-icons"])[1]//button)['
        const buttonsuffix = ']'
          cy.verifylist(',', listbuttons, buttonprefix, buttonsuffix, 'result1', 'timetrendswitcherbuttons', ',')
    }
}
export default SPEDPages