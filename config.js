var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNtNGxmc2Q5bDAxYjkya3M3ZGs1cDF2NzgifQ.JCvSbkquZpgPo4I1J83vNQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<p style="text-align: center; font-weight: 400; color: #006576; font-size: 1.4rem;"> Alimentație modernă</p>',
    subtitle: '<span style="font-family: \'Roboto\'; color: #006576; font-size: 2.7rem; font-weight: 900; display: inline-flex; align-items: center; flex-wrap: wrap;"> Cum a ajuns laptele <img src="plant.png" alt="Plant icon" style="height: 0.7em; width: auto; margin: 0 4px;">vegetal vedetă</span>',

    byline: '<a href="https://panorama.ro/author/panorama/" target="_blank" style="color:#006576;">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 14 februarie 2025 <br> <a href="https://panorama.ro/author/alina-matis/" target="_blank">Editor: Alina Mărculescu Matiș</a> ',
    chapters: [
        {
            id: 'cap1.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: true,
            title: '',
            image: '',
            description: '',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        
        
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: false,
            title: '',
            image: '',
            description: 'Folosit de sute de ani în bucătăria românească, laptele de vacă are rădăcini adânci în tradițiile pastorale ale poporului. De la comunitățile dacice, care consumau lactate sub diverse forme, până la influențele medievale aduse prin schimburile culturale cu imperiile vecine, produsele lactate au fost o constantă în alimentația românilor.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


        {
            id: 'cap2',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Creșterea oilor este activitatea predominantă în păstorit, iar numărul de ovine este semnificativ. În schimb, la bovine, România se află printre ultimele locuri din Uniunea Europeană ca efectiv de animale.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        
        {
            id: 'cap3',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21630430/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21630430/?utm_source=embed&utm_campaign=visualisation/21630430" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap4',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'România produce lapte, însă nu suficient pentru a se afla în topul clasamentului Uniunii Europene. Mai mult, datele Institutului Național de Statistică arată că producția agricolă de lapte a înregistrat un declin în ultimele două decenii.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap5',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21631832/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21631832/?utm_source=embed&utm_campaign=visualisation/21631832" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap6',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Consumul de lapte vegetal în România a început să crească vizibil în ultimul deceniu, pe fondul preocupărilor tot mai mari pentru un stil de viață sănătos, tendințelor de dietă vegană și intoleranței la lactoză. Conform cercetărilor realizate de Danone România, 39% dintre români consumă în prezent produse pe bază de plante.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap7',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Inițial, laptele vegetal era considerat un produs de nișă, disponibil doar în magazinele naturiste, însă cererea a crescut constant, determinând marile lanțuri de supermarketuri să includă în ofertă o varietate de alternative – de la lapte de soia și migdale la ovăz, cocos și caju. Evoluția pieței a fost susținută și de creșterea numărului de producători locali, dar și de branduri internaționale care au intrat pe piață. În prezent, deși consumul de lapte vegetal este în continuare semnificativ mai mic decât cel de lapte de vacă, acesta continuă să se extindă, fiind preferat de un segment tot mai mare de consumatori preocupați de nutriție și sustenabilitate.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap8',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În dietele tipice din Uniunea Europeană, lactatele reprezintă peste un sfert din amprenta de carbon a alimentației, iar în unele cazuri chiar o treime. ',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        {
            id: 'cap9',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21632298/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21632298/?utm_source=embed&utm_campaign=visualisation/21632298" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        {
            id: 'cap10',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21632740/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21632740/?utm_source=embed&utm_campaign=visualisation/21632740" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap11',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21632782/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21632782/?utm_source=embed&utm_campaign=visualisation/21632782" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap12',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Laptele de vacă și alternativele vegetale au profiluri nutriționale diferite, iar un litru de lapte vegetal nu echivalează cu unul de lapte de vacă. Lactatele sunt mai bogate în proteine, oferind 3,4 g/100 ml, față de doar 0,5 g în laptele de migdale, și conțin toți aminoacizii esențiali. În schimb, majoritatea laptelui vegetal este fortificat cu calciu, vitamina D și B12, reducând riscul de carențe nutriționale, mai ales pentru vegani.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap13',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pentru a facilita comparația între diferitele tipuri de lapte vegetal, am creat un instrument care prezintă profilul nutrițional al produselor disponibile pe piață, utilizând aplicația Eat&Track. Poți selecta și sorta caracteristicile relevante pentru a analiza compoziția fiecărui produs în funcție de nutrienți esențiali. Pentru fiecare categorie, am inclus peste 200 de produse diferite, oferind o imagine clară asupra valorilor nutriționale și a diferențelor dintre alternativele vegetale.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        
        {
            id: 'capCharts',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },        



        
        

    ]
};