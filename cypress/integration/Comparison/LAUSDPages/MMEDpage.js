/// <reference types="Cypress" />
import MMEDObjects from "../Objects/MMEDpageobject"


class MMEDPages {

    verifyMMEDpagetitlesubtitleSource() {

        cy.get(MMEDObjects.instruction).should('be.visible')
        cy.get(MMEDObjects.instruction).click()
        cy.wait(20000)
        cy.pagelaunch(MMEDObjects.mmed, MMEDObjects.mmedpagetitle, 'result1', 'mmedpagetitle')
        cy.invoketext(MMEDObjects.mmedpagesubtitle, 'result1', 'mmedpagesubtitle')
    }

    verifyMMEDpagetitlesubtitleTarget() {
        cy.get(MMEDObjects.instruction).should('be.visible')
        cy.get(MMEDObjects.instruction).click()
        cy.wait(20000)
        cy.pagelaunch(MMEDObjects.mmed, MMEDObjects.mmedpagetitle, 'result2', 'mmedpagetitle')
        cy.invoketext(MMEDObjects.mmedpagesubtitle, 'result2', 'mmedpagesubtitle')
    }

    verifymetricsataglanceSource() {
        cy.verifylist(MMEDObjects.listofmetrics, MMEDObjects.metricsprefix, MMEDObjects.metricssuffix, 'result1', 'metrictitle')
        cy.verifylist(MMEDObjects.listofmetricsdata, MMEDObjects.metricsdataprefix, MMEDObjects.metricsdatasuffix, 'result1', 'metricdata')
    }

    verifymetricsataglanceTarget() {
        cy.verifylist(MMEDObjects.listofmetrics, MMEDObjects.metricsprefix, MMEDObjects.metricssuffix, 'result2', 'metrictitle', ',')
        cy.verifylist(MMEDObjects.listofmetricsdata, MMEDObjects.metricsdataprefix, MMEDObjects.metricsdatasuffix, 'result2', 'metricdata', ',')
    }

    verifyoperationaldashboardSource() {
        cy.verifylist(MMEDObjects.listofoperationaldashboard, MMEDObjects.operationalprefix, MMEDObjects.operationalsuffix, 'result1', 'operationaldashboardtitle', ',')
    }

    verifyoperationaldashboardTarget() {
        cy.verifylist(MMEDObjects.listofoperationaldashboard, MMEDObjects.operationalprefix, MMEDObjects.operationalsuffix, 'result2', 'operationaldashboardtitle', ',')
    }

    navigatingtommeddashboardSource() {
        cy.pagelaunch('{', MMEDObjects.mmeddashboard, MMEDObjects.mmeddashboardtitle, 'result1', 'mmeddashboardtitle', ',')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }

    navigatingtommeddashboardTarget() {
        cy.pagelaunch('{', MMEDObjects.mmeddashboard, MMEDObjects.mmeddashboardtitle, 'result2', 'mmeddashboardtitle', ',')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }

    verifymmedtilesSource() {
        cy.verifylist(MMEDObjects.mmedtileslist, MMEDObjects.mmedtilesprefix, MMEDObjects.mmedtilessuffix, 'result1', 'mmedtilestitle')
    }

    verifymmedtilesTarget() {
        cy.verifylist(MMEDObjects.mmedtileslist, MMEDObjects.mmedtilesprefix, MMEDObjects.mmedtilessuffix, 'result2', 'mmedtilestitle')
    }

    verifyprofilesummarySource() {

        const mmedtilelist = 'div.basic-container-container ul.slider-list > li'
        const tilesprefix = 'div.basic-container-container ul.slider-list > li:nth-child('
        const tilessuffix = ')'
        cy.get(mmedtilelist)
            .then(($tilelist) => {
                const tilelistcount = $tilelist.length;
                var j;
                for (j = 1; j < tilelistcount; j++) {
                    const tiletext =$tilelist[j].innerText
                   // const tilevalue = tilesprefix + j + tilessuffix
                  //  cy.get(tilevalue).click({ force: true })
                  $tilelist[j].click({ force: true })
                    cy.wait(80000)
                    const dropdown = 'div.Select-value'
                    const dropdownoptions = 'div.Select-option'
                    cy.get(dropdown).click({ force: true })
                    cy.wait(30000)
                    const prefix =
                     '(//div[@role="option"])['
                    const suffix = ']'
                    cy.get(dropdownoptions)
                        .then(($dropoptions) => {
                            const listcount = $dropoptions.length;
                            cy.writeFile('./cypress/fixtures/result1.json', '"profilesummarydropdownlength:"'+ '"'+listcount+'"'+',' ,{ flag: 'a+' })
                            cy.writeFile('./cypress/fixtures/result1.json', '"profilesummarydropdownoptions:"'+ '[' ,{ flag: 'a+' })
                            
                            var i;
                            for (i = 1; i < listcount; i++) {
                                cy.get(dropdown).click({ force: true })
                                cy.wait(30000)
                                const dropdownvalue = prefix + i + suffix
                                cy.get(dropdownvalue)
          .invoke('text').then(value => {
            cy.writeFile('./cypress/fixtures/result1.json', '"'+value + '"'+ ',' ,{ flag: 'a+' })
          })
          cy.wait(5000)
                                cy.xpath(dropdownvalue).click({ force: true })
                                cy.wait(30000)
                                var value;

                                switch (i) {
                                    case 1:
                                        value = "(//div[@class='amcharts-chart-div'])[1]";
                                        break;
                                    case 2:
                                        value = "//*[@class='ProfileSummaryTableClass']";
                                        break;
                                    case 3:
                                        value = "(//table[@class='CVTable'])[2]";
                                        break;
                                    case 4:
                                        value = "(//div[@class='amcharts-chart-div'])[2]";
                                        break;
                                    case 5:
                                        value = "//*[@class='GraduationTableClass']";
                                        break;
                                    case 6:
                                        value = "(//div[@class='amcharts-chart-div'])[3]";
                                        break;
                                    case 7:
                                        value = "//*[@class='ProgramAlertTableClass']";
                                        break;
                                }
                                cy.xpath(value).as('data')
                                cy.get('@data').should('be.visible')
                                cy.wait(30000)
                                cy.get(dropdown).click()
                                cy.wait(30000)
                            }

                            cy.writeFile('./cypress/fixtures/result1.json', ']'+',' ,{ flag: 'a+' })
                            
                        });
                }
            });
    }

    verifyprofilesumm() {
        const listoftextxaxis = 'div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(1) > section > div:nth-child(2) > div svg  g:nth-child(15) g(1)'
        const listoftextyaxis = 'div.basic-container-container > div:nth-child(3) > section > div > div:nth-child(1) > section > div:nth-child(2) > div svg  g:nth-child(15) g(2)'
        const prefixxaxis = ''
        const suffixxaxis = ''
        const prefixyaxis = ''
        const suffixyaxis = ''
        cy.verifylist(',', listoftextxaxis, prefix, suffix, 'result1', 'mmedtiles', ',')
        cy.verifylist(',', listoftextyaxis, prefix, suffix, 'result1', 'mmedtiles', ',')
    }

    verifycurrentyearanalysis() {
        const currentyearcharttitle = 'div.basic-container-container > div:nth-child(4) > section > div > div:nth-child(1) > section > div.wrap-component-top > div span.toolbar-component-title'
        const current_year = '.switcher-container-content-child:nth-child(1) > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container > .toolbar-component-title-subtitle > .toolbar-component-title'
        const current_year_graphview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(1)'
        const current_year_tableview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(2)'
        const listoflegendgraphview = 'div.basic-container-container > div:nth-child(4) > section > div  div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g > text'
        const prefixlegendgraphview = 'div.basic-container-container > div:nth-child(4) > section > div  div > div.amChartsLegend.amcharts-legend-div > svg > g > g > g:nth-child('
        const suffixlegendgraphview = ') > text'
        const listofxaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(1) > text > tspan'
        const prefixxaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(1) > text:nth-child('
        const suffixxaxisgraphview = ') > tspan'
        const listofyaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(2) > text > tspan'
        const prefixyaxisgraphview = 'div.basic-container-container > div:nth-child(4) > section > div div > div.amcharts-chart-div > svg > g:nth-child(15) > g:nth-child(2) > text:nth-child('
        const suffixyaxisgraphview = ') > tspan'
        const listofheadertableview = 'div.basic-container-container > div:nth-child(4) > section > div td.PTChildPivotTable > table  > tbody > tr:nth-child(2) > td'
        const prefixheadertableview = 'div.basic-container-container > div:nth-child(4) > section > div td.PTChildPivotTable > table  > tbody > tr:nth-child(2) > td:nth-child('
        const suffixheadertableview = ')'
        cy.get(current_year).should('be.visible')
        cy.get(current_year_graphview).should('be.visible')
        cy.get(current_year_tableview).should('be.visible')
        cy.invoketext(',', currentyearcharttitle, 'result1', 'currentyearcharttitle', ',')
        cy.verifylist(',', listoflegendgraphview, prefixlegendgraphview, suffixlegendgraphview, 'result1', 'graphviewlegend', ',')
        cy.verifylist(',', listofxaxisgraphview, prefixxaxisgraphview, suffixxaxisgraphview, 'result1', 'graphviewxaxis', ',')
        cy.verifylist(',', listofyaxisgraphview, prefixyaxisgraphview, suffixyaxisgraphview, 'result1', 'graphviewyaxis', ',')
        cy.get(current_year_tableview).click()
        cy.verifylist(',', listofheadertableview, prefixheadertableview, suffixheadertableview, 'result1', 'tableviewheader', ',')
    }

    verifycurrentyeartableview() {
        const tablebutton = '(//*[@class = "button-switcher-container"])[1]'
        const currentenrollmentlist = '(//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a'
        cy.xpath(tablebutton).click()
        cy.wait(50000)
        cy.xpath(currentenrollmentlist)
            .then(($list) => {
                const listcount = $list.length;
                cy.writeFile('./cypress/fixtures/result1.json', "number of rows" + listcount + '\n')
                var i;
                cy.writeFile('./cypress/fixtures/result1.json', "currentenrollment:" + '[', { flag: 'a+' })
                for (i = 1; i < (listcount); i++) {
                    const prefix = '((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)['
                    const suffix = ']'
                    cy.xpath(prefix + i + suffix)
                        .invoke('text').then(value => {
                            cy.writeFile('./cypress/fixtures/result1.json', '"' + value + '"' + ',', { flag: 'a+' })
                        })
                }
                cy.writeFile('./cypress/fixtures/result1.json', "" + ']', { flag: 'a+' })
                /*     for (i = 1; i < (listcount); i++) {
                         const prefix = '((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)['
                         const suffix = ']'
                             cy.xpath(prefix+i+suffix).click()  
                             cy.wait(20000)
                             cy.xpath('(//*[@class="contextMenuOptionText"])[1]').click()
                             cy.wait(120000)
                             cy.xpath('//*[@class = "mPTHC TTHT mPTHT PTHT mPTLR PTLR mPTLC PTLC OORT"]')
                              .invoke('text').then(value => {
                                 cy.writeFile('./cypress/fixtures/result1.json', "Schooldashboard_Total:"+'"'+value + '"'+ ',' ,{ flag: 'a+' })
                               })      
                     }
                     cy.writeFile('./cypress/fixtures/result1.json', ']', { flag: 'a+' })*/
            })
    }

    navigatetoschoolreport() {
        cy.xpath('(//*[@class = "button-switcher-container"])[1]').click()
        cy.wait(20000)
        cy.xpath('((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)[7]').as('data')
        cy.get('@data')
            .scrollIntoView()
            .should('be.visible')
            .click()
        cy.xpath('(//*[@class="contextMenuOptionText"])[1]').click()
        cy.wait(80000)
    }

    verifynumberofstudents_schoolreport() {
        cy.get('a.PTL')
            .then(($list) => {
                for (let i = 1; i <= $list.length; i++) {
                    const prefix = '(//a[@class="PTL"])['
                    const suffix = ']'
                    const students = prefix + i + suffix
                    cy.xpath(students).click()
                    cy.wait(5000)
                    cy.xpath('//*[@class="contextMenuOptionText"]').click()
                    cy.wait(40000)
                    cy.xpath('//*[contains(text(), "Total no. of Rows:") ]').as('totalnoofrows')
                    cy.get('@totalnoofrows').should('be.visible')
                    cy.xpath('//*[@class="PTL"]').as('data')
                    let empty = [];
                    cy.get('@data').then((data) => {
                        const n = data.length
                        for (let j = 0; j < n; j++) {
                            if (!empty.includes(data[j].innerText)) {
                                empty.push(data[j].innerText)
                            }
                        }
                        cy.log(empty, "emptylength" + empty.length)
                        cy.writeFile('./cypress/fixtures/result1.json', '{"numberofstudents_SchoolReport' + i + '":' + empty.length + '}' + "\n", { flag: 'a+' })
                        cy.wait(20000)
                        cy.xpath('//*[@class="masterBreadCrumbItem BreadCrumbItem"][@title="School Detailed Report"]').click()
                        cy.wait(20000)
                    })
                }
            })
    }

    navigatingtostudentreport() {
        cy.xpath('(//*[@class = "button-switcher-container"])[1]').click()
        cy.wait(10000)
        cy.xpath('((//*[@class="PTChildPivotTable"])[4] //table //tbody // tr // td[2] // a)[7]').as('data')
        cy.get('@data')
            .scrollIntoView()
            .should('be.visible')
            .click()
        cy.wait(80000)
        cy.xpath('(//*[@class="contextMenuOptionText"])[2]').click()
        cy.wait(80000)
    }

    verifynumberofstudents_studentreport() {
        cy.xpath('(//*[@class="TapeDeckImageEna"])[2]').should('be.visible')
        cy.xpath('(//*[@class="TapeDeckImageEna"])[2]').click()
        cy.wait(380000)
        cy.xpath('//*[@class="PTL"]').as('data')
        let empty = [];
        cy.get('@data').then((data) => {
            const n = data.length
            for (let i = 0; i < n; i++) {
                if (!empty.includes(data[i].innerText)) {
                    empty.push(data[i].innerText)
                }
            }
            cy.log(empty, "emptylength" + empty.length)
            cy.writeFile('./cypress/fixtures/result1.json', '{"numberofstudents_StudentReport":' + empty.length + '}' + "\n", { flag: 'a+' })

        })
    }

    verifyglobalfilter() {
        const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
        cy.get(filtericon).click()
    }

    //mmedelementarydashboard
    verifycurrentyearanalysis2() {
        const mmedelementarytile = 'div.brintell-framework-App-container-landing > div > div.banner-content > div:nth-child(2) > div > div > div.b-mega-menu-pages > div:nth-child(2)'
        const mmedelementarypagetitle = 'div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
        const mmedelementarypagetitletext = 'Multilingual and Multicultural Education Department '
        const current_year = '.switcher-container-content-child:nth-child(1) > .wrap-component > .wrap-component-top > .toolbar-component > .toolbar-component-header-container > .toolbar-component-title-subtitle > .toolbar-component-title'
        const current_year_graphview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(1)'
        const current_year_tableview = '.basic-container-container > div:nth-child(4) > .switcher-container >div > div:nth-child(1) > section > div.wrap-component-top > div:nth-child(1) > div.toolbar-component-switcher-icons > div > div > button:nth-child(2)'
        //Test case8: MMED- RFEP Enrollment- Current Year vs Last Year Analysis
        //Navigating from MMED home page by clicking MMED tile
        cy.pagelaunch(mmedelementarytile, mmedelementarypagetitle, mmedelementarypagetitletext);
        //   cy.wait(7000)
        cy.get(current_year).should('be.visible')
        cy.get(current_year_graphview).should('be.visible')
        cy.get(current_year_tableview).should('be.visible')
    }

    verifymmedtiles() {
        const tiles = 'div.kpi-card-single-component-wrapper > div >span'
        cy.get(tiles)
            .should(($tiles) => {
                // should have found 7 elements
                expect($tiles).to.have.length(7)
                expect($tiles.eq(0)).to.contain('RFEP Enrollment')
                expect($tiles.eq(1)).to.contain('English Learners ETK 12')
                expect($tiles.eq(2)).to.contain('Newcomer')
                expect($tiles.eq(3)).to.contain('P - LTEL')
                expect($tiles.eq(4)).to.contain('LTEL')
                expect($tiles.eq(5)).to.contain('RFEP to Date - As Of Census Day')
                expect($tiles.eq(6)).to.contain('RFEP Monitoring')
            })
    }

    verifyglobalfilter() {
        const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
        cy.get(filtericon).click()
    }


}
export default MMEDPages