import LoginPages from '../../Comparison/LAUSDPages/LoginPage'
import HomePages from '../../Comparison/LAUSDPages/HomePage'
import MMEDPages from '../../Comparison/LAUSDPages/MMEDpage'
import SPEDPages from '../../Comparison/LAUSDPages/SPEDpage'

describe('MMEDPageTest', function () {
    beforeEach(function () {
        cy.fixture('result1').then((d1) => {
            this.d1 = d1
        })
    
        cy.fixture('result2').then((d2) => {
            this.d2 = d2
        })
    })
    
    it("Verify title of MMED Dashboard", function () {
        expect('mmeddashboardtitle='+this.d1.mmeddashboardtitle).to.equal('mmeddashboardtitle='+this.d2.mmeddashboardtitle)
    })

    it("Verify number of MMED tiles", function () {
        expect('mmedtilescount='+this.d1.mmedtilescount).to.equal('mmedtilescount='+this.d2.mmedtilescount)
    })

    it("Verify title of MMED tiles", function () {
        expect('mmedtilestitle='+this.d1.mmedtilestitle).to.equal('mmedtilestitle='+this.d2.mmedtilestitle)
    })
    it("Verify data of MMED tiles", function () {

        expect('mmedtilesdata='+this.d1.mmedtilesdata).to.equal('mmedtilesdata='+this.d2.mmedtilesdata)

    })
    it("Verify profilesummarydropdown", function () {

        expect('profilesummarydropdownlength='+this.d1.profilesummarydropdownlength).to.equal('profilesummarydropdownlength='+this.d2.profilesummarydropdownlength)
        expect('profilesummarydropdownoptions='+this.d1.profilesummarydropdownoptions).to.equal('profilesummarydropdownoptions='+this.d2.profilesummarydropdownoptions)

    })
    it("Verify currentyear_vs_lastyear", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })
    it("Verify number of Operational Dashboard", function () {

        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)

    })


})