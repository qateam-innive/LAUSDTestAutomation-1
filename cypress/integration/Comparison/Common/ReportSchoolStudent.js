import LoginPages from '../LAUSDPages/LoginPage'
import MMEDPages from '../LAUSDPages/MMEDpage'
import SchoolStudentPages from './SchoolStudentPage';

describe('demoSuite', function () {

  it('sourceURL', function () {
    const lp = new LoginPages
    const mp = new MMEDPages
    cy.visit('http://focus.lausd.net/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    lp.login()
    cy.wait(180000)
    mp.verifyMMEDpagetitlesubtitleSource()
    mp.navigatingtommeddashboard()
    mp.navigatetoschoolreport()
    mp.verifynumberofstudents_schoolreport()
    // mp.navigatingtostudentreport()
    // mp.verifynumberofstudents_studentreport()
  })
})