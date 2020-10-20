class MMEDObjects{

    static instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
    static mmed = 'div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(3) > div.b-icon > img'
    static mmedpagetitle = 'div.banner-row div.box-title p.title'
    static mmedpagesubtitle = 'p.subtitle'

    static listofmetrics = 'div.kpis section > div.kpi-header > span'
    static listofmetricsdata = 'div.kpis section > div.kpi-main > div.kpi-actual > div > span'
    static metricsprefix = 'div.kpis section:nth-child('
    static metricssuffix = ') div.kpi-header > span'
    static metricsdataprefix = 'div.kpis section:nth-child('
    static metricsdatasuffix = ') div.kpi-main > div.kpi-actual > div > span'
   
    static operational_dashboard_title = 'div.brintell-framework-botton-tiles-title-second-level.brintell-framework-botton-tiles-title-selected > span'
    static operational_dashboard = '.b-mega-menu-pages > .brintell-framework-botton-tile > .brintell-framework-botton-tile-name'
    static listofoperationaldashboard = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
    static operationalprefix = 'div.b-mega-menu-pages > div:nth-child('
    static operationalsuffix = ') > div.brintell-framework-botton-tile-name'

    static mmeddashboard = 'div.b-mega-menu-pages > div:nth-child(1) > div.brintell-framework-botton-tile-name'
    static mmeddashboardtitle = 'div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)'
  
    static mmedtiles = 'div.kpi-card-single-component-wrapper > div >span'
    static mmedtileslist = 'div.basic-container-container ul.slider-list > li'
    static mmedtilesprefix = 'div.basic-container-container ul.slider-list > li:nth-child('
    static mmedtilessuffix = ')'
}
export default MMEDObjects