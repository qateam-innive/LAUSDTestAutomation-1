/// <reference types="Cypress" />


class GraduationPages {
    verifyGraduationpagelaunch() {

        const instruction = '.b-header > .container-header > .b-groups-icons > .b-icon-context:nth-child(2) > .b-icon-mask'
        const analyticareas = 'div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div > div.b-title > span'
        const graduation = "div.brintell-framework-App-container-welcome > div > div.b-subject-area > div.container-one > div > div.b-content-cards > div:nth-child(2) > div.b-icon > img"
        const graduationTitle = "#root > div > section.brintell-framework-App > div.brintell-framework-App-container-landing > div > div.banner-content > div:nth-child(1) > div.banner-column.left-column > div:nth-child(1) > div > p.title"
        const graduationTitleText = 'Graduation Progress'
        cy.get(instruction)
            .should('be.visible')
            .click()
        //Navigating from Home page to Graduation Page
        cy.pagelaunch(graduation, graduationTitle, graduationTitleText);
        cy.wait(7000)

         // 1st Test case --> To Check whether the 2 Modules available in Graduation Progress Page
        
         cy.xpath("//span[text()='Dashboards']/following-sibling::div").should('be.visible')
         cy.contains('Credit Recovery').should('be.visible')
 
         cy.log("1st Test case passed - Both Operational Dashboards and Credit Recovery is visible");


 
    }                      
 
        //cy.xpath("(//div[@class='b-icon'])[2]").click()
        //cy.wait(6000)

        verifyoperationaldashboard() {

            //Objects
            const operational_dashboard_title = 'div.brintell-framework-botton-tiles-title-second-level.brintell-framework-botton-tiles-title-selected > span'
            const operational_dashboard = '.b-mega-menu-pages > .brintell-framework-botton-tile > .brintell-framework-botton-tile-name'
            const listofoperationaldashboard = 'div.b-mega-menu-pages > div > div.brintell-framework-botton-tile-name'
            const operationalprefix = 'div.b-mega-menu-pages > div:nth-child('
            const operationalsuffix = ') > div.brintell-framework-botton-tile-name'
           
            // Test case2: To Check whether the 6 Sub Modules available in Operational Dashboards
            cy.get(operational_dashboard_title)
                .scrollIntoView()
                .should('be.visible')
          
                cy.verifylist(',', listofoperationaldashboard, operationalprefix, operationalsuffix, 'result1', 'operationaldashboard', ',')             
                cy.verifylist(',', listofoperationaldashboard, operationalprefix, operationalsuffix, 'result1', 'operationaldashboard', ',')             

            }

            verifycentralofficeviewtiles() {
                
                const tiles = 'div.wrap-component-container>section>section'

                cy.contains('Graduation Progress Central Office View').click();
                cy.wait(5000)
                cy.get('#root > div > section > div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)').should('be.visible');
                cy.wait(10000)

               /* cy.get(tiles)
                    .should(($tiles) => {
                        // should have found 4 elements
                        expect($tiles).to.have.length(4)
                        expect($tiles.eq(0)).to.contain('Class of 2021 A-G D or Better')
                        expect($tiles.eq(1)).to.contain('Class of 2021 All Academic Requirements Met')
                        expect($tiles.eq(2)).to.contain('University of California A-G C or Better')
                        expect($tiles.eq(3)).to.contain('Cal-State University A-G C or Better') 
                        cy.wait(7000)

                    }) */
                        
                        
                         //Verifying the Components of Class of 2021 A-G D or Better - Tile 1
                       
                         // Clicking on Requirements Subjects/ Graduation Year View
                        cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                        cy.wait(7000)
                        cy.xpath("//button[text()='Table']").should('be.visible')
                        cy.xpath("//button[text()='Graph']").should('be.visible')

                        // Clicking on District Summary View
                        cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                        cy.wait(7000)
                        cy.xpath("//button[text()='Table']").should('be.visible')
                        cy.xpath("//button[text()='Graph']").should('be.visible')

                        // Clicking on Student Summary View
                        cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                        cy.wait(7000)
                        cy.xpath("//button[text()='Table']").should('be.visible')
                        cy.xpath("//button[text()='Graph']").should('be.visible')

                        //Verifying the Components of Class of 2021 All Academic Requirements Met - Tile 2
                       
                         // Clicking on Requirements Subjects/ Graduation Year View
                         cy.wait(5000)
                         cy.xpath("//span[text()='Class of 2021 All Academic Requirements Met']").click();
                         cy.log("Tile 2 is clicked")
                         cy.wait(5000)
                         cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
 
                         // Clicking on District Summary View
                         cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
 
                         // Clicking on Student Summary View
                         cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')


                          //Verifying the Components of University of California A-G C or Better - Tile 3
                       
                         // Clicking on Requirements Subjects/ Graduation Year View
                         cy.wait(5000)
                         cy.xpath("//div[@id='KPI_LIST_COMPONENT']/section[1]/div[1]/section[1]/section[3]/div[1]/div[1]/div[1]/div[1]/span[2]").click({ multiple: true});
                         cy.log("Tile 3 is clicked")
                         cy.wait(5000)
                         cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
 
                         // Clicking on District Summary View
                         cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
 
                         // Clicking on Student Summary View
                         cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
                         

                          //Verifying the Components of Cal-State University A-G C or Better- Tile 4
                       
                         // Clicking on Requirements Subjects/ Graduation Year View
                         cy.wait(5000)
                         cy.xpath("//div[@id='KPI_LIST_COMPONENT']/section[1]/div[1]/section[1]/section[4]/div[1]/div[1]/div[1]/div[1]/span[2]").click({ multiple: true});
                         cy.log("Tile 4 is clicked")
                         cy.wait(5000)
                         cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
 
                         // Clicking on District Summary View
                         cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
 
                         // Clicking on Student Summary View
                         cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                         cy.wait(7000)
                         cy.xpath("//button[text()='Table']").should('be.visible')
                         cy.xpath("//button[text()='Graph']").should('be.visible')
                         cy.wait(3000)           


                }


                verifylocaldistrictviewtiles() {
                
                    const tiles = 'div.wrap-component-container>section>section'

                    //cy.xpath("//div[@class='menu-component-function mega-menu-active']").click()
                    //cy.wait(5000)
                    cy.contains('Graduation Progress Local District View').click();
                    cy.wait(10000)
                    cy.get('#root > div > section > div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)').should('be.visible');
                    cy.wait(40000)
    
                   /* cy.get(tiles)
                        .should(($tiles) => {
                            // should have found 4 elements
                            expect($tiles).to.have.length(4)
                            expect($tiles.eq(0)).to.contain('Class of 2021 A-G D or Better')
                            expect($tiles.eq(1)).to.contain('Class of 2021 All Academic Requirements Met')
                            expect($tiles.eq(2)).to.contain('University of California A-G C or Better')
                            expect($tiles.eq(3)).to.contain('Cal-State University A-G C or Better') 
                            cy.wait(7000)
    
                        }) */
                            
                            
                             //Verifying the Components of Class of 2021 A-G D or Better - Tile 1
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                            cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                            cy.wait(7000)
                            cy.xpath("//button[text()='Table']").should('be.visible')
                            cy.xpath("//button[text()='Graph']").should('be.visible')
    
                            // Clicking on District Comparison
                            cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                            cy.wait(7000)
                            cy.xpath("//button[text()='Table']").should('be.visible')
                            cy.xpath("//button[text()='Graph']").should('be.visible')
    
                            // Clicking on Student Summary View
                            cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                            cy.wait(7000)
                            cy.xpath("//button[text()='Table']").should('be.visible')
                            cy.xpath("//button[text()='Graph']").should('be.visible')
    
                            //Verifying the Components of Class of 2021 All Academic Requirements Met - Tile 2
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                             cy.wait(5000)
                             cy.xpath("//span[text()='Class of 2021 All Academic Requirements Met']").click();
                             cy.log("Tile 2 is clicked")
                             cy.wait(5000)
                             cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on District Summary View
                             cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on Student Summary View
                             cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
    
    
                              //Verifying the Components of University of California A-G C or Better - Tile 3
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                             cy.wait(5000)
                             cy.xpath("//div[@id='KPI_LIST_COMPONENT']/section[1]/div[1]/section[1]/section[3]/div[1]/div[1]/div[1]/div[1]/span[2]").click();
                             cy.log("Tile 3 is clicked")
                             cy.wait(5000)
                             cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on District Summary View
                             cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on Student Summary View
                             cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
    
    
    
                             
                              //Verifying the Components of Cal-State University A-G C or Better- Tile 4
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                             cy.wait(5000)
                             cy.xpath("//div[@id='KPI_LIST_COMPONENT']/section[1]/div[1]/section[1]/section[4]/div[1]/div[1]/div[1]/div[1]/span[2]").click({ multiple: true});
                             cy.log("Tile 4 is clicked")
                             cy.wait(5000)
                             cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on District Summary View
                             cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on Student Summary View
                             cy.xpath("//span[text()='Student Summary View']").should('be.visible'); 
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')                
    
                    }

                
                             
                verifycampusviewtiles() {
                
                    const tiles = 'div.wrap-component-container>section>section'

                    //cy.xpath("//div[@class='menu-component-function mega-menu-active']").click()
                    //cy.wait(5000)
                    cy.contains('Graduation Progress Campus View').click();
                    cy.wait(10000)
                    cy.get('#root > div > section > div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)').should('be.visible');
                    cy.wait(40000)
    
                   /* cy.get(tiles)
                        .should(($tiles) => {
                            // should have found 4 elements
                            expect($tiles).to.have.length(4)
                            expect($tiles.eq(0)).to.contain('Class of 2021 A-G D or Better')
                            expect($tiles.eq(1)).to.contain('Class of 2021 All Academic Requirements Met')
                            expect($tiles.eq(2)).to.contain('University of California A-G C or Better')
                            expect($tiles.eq(3)).to.contain('Cal-State University A-G C or Better') 
                            cy.wait(7000)
    
                        }) */
                            
                            
                             //Verifying the Components of Class of 2021 A-G D or Better - Tile 1
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                            cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                            cy.wait(7000)
                            cy.xpath("//button[text()='Table']").should('be.visible')
                            cy.xpath("//button[text()='Graph']").should('be.visible')
    
                            // Clicking on District Comparison
                            cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                            cy.wait(7000)
                            cy.xpath("//button[text()='Table']").should('be.visible')
                            cy.xpath("//button[text()='Graph']").should('be.visible')
    
                            // Clicking on Student Group Comparison View
                            cy.xpath("//span[text()='Student Group Comparison']").should('be.visible'); 
                            cy.wait(7000)
                            cy.xpath("//button[text()='Table']").should('be.visible')
                            cy.xpath("//button[text()='Graph']").should('be.visible')
    
                            //Verifying the Components of Class of 2021 All Academic Requirements Met - Tile 2
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                             cy.wait(5000)
                             cy.xpath("//span[text()='Class of 2021 All Academic Requirements Met']").click();
                             cy.log("Tile 2 is clicked")
                             cy.wait(5000)
                             cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on District Summary View
                             cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on Student Group Comparison
                             cy.xpath("//span[text()='Student Group Comparison']").should('be.visible'); 
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
    
    
                              //Verifying the Components of University of California A-G C or Better - Tile 3
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                             cy.wait(5000)
                             cy.xpath("//div[@id='KPI_LIST_COMPONENT']/section[1]/div[1]/section[1]/section[3]/div[1]/div[1]/div[1]/div[1]/span[2]").click();
                             cy.log("Tile 3 is clicked")
                             cy.wait(5000)
                             cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on District Summary View
                             cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on Student Group Comparison
                             cy.xpath("//span[text()='Student Group Comparison']").should('be.visible'); 
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
    
    
    
                             
                              //Verifying the Components of Cal-State University A-G C or Better- Tile 4
                           
                             // Clicking on Requirements Subjects/ Graduation Year View
                             cy.wait(5000)
                             cy.xpath("//div[@id='KPI_LIST_COMPONENT']/section[1]/div[1]/section[1]/section[4]/div[1]/div[1]/div[1]/div[1]/span[2]").click({ multiple: true});
                             cy.log("Tile 4 is clicked")
                             cy.wait(5000)
                             cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on District Summary View
                             cy.xpath("(//span[@class='toolbar-component-title'])[3]").should('be.visible');
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible')
     
                             // Clicking on Student Group Comparison
                             cy.xpath("//span[text()='Student Group Comparison']").should('be.visible'); 
                             cy.wait(7000)
                             cy.xpath("//button[text()='Table']").should('be.visible')
                             cy.xpath("//button[text()='Graph']").should('be.visible') 
    
                    }


                            
                verifysimulatorviewtiles() {
                
                    const tiles = 'div.wrap-component-container>section>section'

                    //cy.xpath("//div[@class='menu-component-function mega-menu-active']").click()
                    //cy.wait(5000)
                    cy.contains('Graduation Simulator View').click();
                    cy.wait(10000)
                    cy.get('#root > div > section > div.brintell-framework-top > div.brintell-framework-breadcrumb > div.brintell-framework-dashboard-name > span:nth-child(1)').should('be.visible');
                    cy.wait(40000)   
                  
                            
                            
                             //Verifying the Components of Class of 2021 All Academic Requirements Met - Tile 1 & Class of 2021 All Academic Requirements Met - Simulated - Tile 2
                           
                             // Clicking on Requirement Subjects View - Actuals
                            cy.xpath("//span[text()='Class of 2021 All Academic Requirements Met']").should('be.visible');
                            cy.wait(7000)
                            cy.xpath("//span[text()='Class of 2021 All Academic Requirements Met - Simulated']").should('be.visible');
                            cy.wait(7000)
                            cy.xpath("//span[@class='toolbar-component-title']").should('be.visible');
                            cy.wait(7000)
    
                            // Clicking on District Summary View - Simulated
                            cy.xpath("//span[text()='District Summary View - Simulated']").should('be.visible');
                            cy.wait(7000)
                            
    
                            // Clicking on Student Summary View - Simulated
                            cy.xpath("//span[text()='Student Summary View - Simulated']").should('be.visible'); 
                            cy.wait(7000)                      
                                             
    
                    }      
                    
                    
                    verifyspecializedpopulationtiles() {
                
                        const tiles = 'div.wrap-component-container>section>section'
    
                        //cy.xpath("//div[@class='menu-component-function mega-menu-active']").click()
                        //cy.wait(5000)
                        cy.contains('Graduation Exemptions for Specialized Population (SP)').click();
                        cy.wait(10000)
                        cy.xpath("//label[@for='Graduation Exemptions for Specialized Population (SP) ReporttitleView!1TitleName']").should('be.visible');
                        cy.wait(40000)   
                         
        
                        }        
                        
                        
                        verifycreditrecoverytiles() {

                            cy.get('div#root>div>section>div:nth-of-type(2)>div>div>div:nth-of-type(2)>div>div>div>div>div>div:nth-of-type(2)').click();

                            cy.get('div#root>div>section>div:nth-of-type(2)>div>div>div:nth-of-type(2)>div>div>div:nth-of-type(2)>div>div>img').click();
                
                            //const tiles = 'div.wrap-component-container>section>section'
        
                            cy.xpath("//div[@class='brintell-framework-dashboard-name']//span").should('be.visible');
                            cy.wait(40000)  

                            //Validating the Board District Summary Report
                            
                            cy.xpath("//td[@id='titleView!1Title']").should('be.visible');
                            cy.wait(50000) 
                            
                            //Validating the Local District Summary Report

                            cy.xpath("(//td[@id='titleView!1Title'])[2]").should('be.visible');
                            cy.wait(50000)  

                            //Validating the Student Detail Report

                            cy.xpath("(//td[@id='titleView!1Title'])[3]").should('be.visible');
                            cy.wait(50000)  
            
                            }  
                            
                            
                            navigatingtostudentreport(){
                                cy.xpath('(//*[@class = "button-switcher-container"])[1]').click()
                                cy.wait(10000)
                                cy.xpath('((//*[@class="PTChildPivotTable"])[2] //table //tbody // tr // td[2] // a)[1]').click()
                                cy.wait(20000)
                                cy.xpath('(//*[@class="contextMenuOptionText"])[2]').click()
                                cy.wait(80000)

                            }
    
    

                verifyglobalfilter() {
                    const filtericon = 'div.brintell-framework-icons > div:nth-child(3) > div > button'
                    cy.get(filtericon).click()
             
                } 

                        




}
export default GraduationPages
