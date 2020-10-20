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
    
    it("verify title of MMEDpage", function () {
        expect('mmedpagetitle='+this.d1.mmedpagetitle).to.equal('mmedpagetitle='+this.d2.mmedpagetitle)
    })

    it("verify subtitle of MMEDpage", function () {
        expect('mmedpagesubtitle='+this.d1.mmedpagesubtitle).to.equal('mmedpagesubtitle='+this.d2.mmedpagesubtitle)
    })

    it("Verify title of metrics", function () {
        expect('metrictitle='+this.d1.metrictitle).to.equal('metrictitle='+this.d2.metrictitle)
        expect('metrictitlecount='+this.d1.metrictitlecount).to.equal('metrictitlecount='+this.d2.metrictitlecount)
    })

    it("Verify metrics data", function () {
        expect('metricdata='+this.d1.metricdata).to.equal('metricdata='+this.d2.metricdata)
        expect('metricdatacount='+this.d1.metricdatacount).to.equal('metricdatacount='+this.d2.metricdatacount)
    })

    it("Verify number of Operational Dashboard", function () {
        expect('operationaldashboardcount='+this.d1.operationaldashboardcount).to.equal('operationaldashboardcount='+this.d2.operationaldashboardcount)
    })

    it("Verify title of Operational Dashboard", function () {
        expect('operationaldashboardtitle='+this.d1.operationaldashboardtitle).to.equal('operationaldashboardtitle='+this.d2.operationaldashboardtitle)
    })
})