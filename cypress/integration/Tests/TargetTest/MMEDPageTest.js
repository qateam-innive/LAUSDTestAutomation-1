import LoginPages from '../../Comparison/LAUSDPages/LoginPage'
import MMEDPages from '../../Comparison/LAUSDPages/MMEDpage'

describe('MMEDPageTest', function () {

    //Testcase 1: Base_URL login
    it("MMED", function () {

        cy.visit('http://focusdev.lausd.net')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        const lp = new LoginPages
        lp.login()
        cy.wait(120000)
        cy.writeFile('./cypress/fixtures/result2.json', '{')
        const mp = new MMEDPages
        //MMED Page
        mp.verifyMMEDpagetitlesubtitleTarget()
       mp.verifymetricsataglanceTarget()
       // mp.verifyoperationaldashboardSource()
        //MMED Dashboard
      //  mp.navigatingtommeddashboard()
      //  mp.verifymmedtilesSource()
//mp.verifyprofilesummarySource()
cy.writeFile('./cypress/fixtures/result2.json', '"":""}', { flag: 'a+' })

    })


})