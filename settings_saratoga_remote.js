/** 
 * Snoborder Saratoga 
 * Released under MIT license
 */
module.exports = {
    uiPort: process.env.PORT || 5555, // runs on port 5555
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    editorTheme: {
        page: {
            title: "Snoborder Saratoga",
            favicon: "/home/bitnami/.saratoga/sara-libs/favicon.ico",
            css: "/home/bitnami/.saratoga/sara-libs/node.css"
        },
        header: {
            title: "Snoborder Saratoga",
            image: "/home/bitnami/.saratoga/snoborder.png", // or null to remove image
            url: "http://snoborder.com" // optional url to make the header text/image a link to this url
        },
        deployButton: {
            type: "simple",
            label: "Save",
            icon: "/home/bitnami/.saratoga/snoborder.png" // or null to remove image
        },
        menu: { // Hide unwanted menu items by id. see editor/js/main.js:loadEditor for complete list
            "menu-item-import-library": false,
            "menu-item-export-library": false,
            "menu-item-keyboard-shortcuts": false,
            "menu-item-help": {
                label: "Alternative Help Link Text",
                url: "https://snoborder.com/saratoga-help"
            }
        },
        userMenu: false, // Hide the user-menu even if adminAuth is enabled
        login: {
            image: "/home/bitnami/.saratoga/snolog_start.png" // a 256x256 image
        }
    },
    userDir: '/home/bitnami/.saratoga/',
    nodesDir: '/home/bitnami/.saratoga/nodes',
    httpRoot: '/saratoga',
    // httpStatic: '/home/bitnami/.saratoga/node-red-static/',

    //    adminAuth: {
    //        type: "credentials",
    //        users: [{
    //            username: "admin123",
    //            password: "$2a$08$32405UW1BMl7W5Txh2z3XeGWixCH2ByFBklDxk4rJws111xWKq4Ce",
    //            permissions: "*"
    //        }]
    //    },

    httpNodeAuth: {
        user: "admin123",
        pass: "$2a$08$soxxShA/vs0OJPC2jrT1/u137LdvokgYiIl/iytmKHsxlOIIOZhxK"
    },
    httpStaticAuth: {
        user: "admin123",
        pass: "$2a$08$soxxShA/vs0OJPC2jrT1/u137LdvokgYiIl/iytmKHsxlOIIOZhxK"
    },

    functionGlobalContext: {
        os: require('os'),
        snomcalc: require('/home/bitnami/.saratoga/sara-libs/calculator/mortgage.js'),
        snohcalc: require('/home/bitnami/.saratoga/sara-libs/calculator/houseprice.js'),
        snomcalc1: require('/home/bitnami/.saratoga/sara-libs/calculator/mcalculate.js'),
        snoaggonkey: require('/home/bitnami/.saratoga/sara-libs/utils/nodeagg.js'),
        snoxml: require('/home/bitnami/.saratoga/sara-libs/xml/xml.js'),
        snoxmljs: require('/home/bitnami/.saratoga/sara-libs/xmljs/index.js'),
        snoulddagg: require('/home/bitnami/.saratoga/sara-libs/cumulate/uldd.js'),
        snojson: require('/home/bitnami/.saratoga/sara-libs/json2json/snojson.js'),
        snopinch: require('/home/bitnami/.saratoga/sara-libs/json2json/pinch.js')
    },

    // The following property can be used to order the categories in the editor
    // palette. If a node's category is not in the list, the category will get
    // added to the end of the palette.
    // If not set, the following default order is used:
    //paletteCategories: ['subflows', 'input', 'output', 'function', 'social', 'mobile', 'storage', 'analysis', 'advanced'],

    // Configure the logging output
    logging: {
        // Only console logging is currently supported
        console: {
            // Level of logging to be recorded. Options are:
            // fatal - only those errors which make the application unusable should be recorded
            // error - record errors which are deemed fatal for a particular request + fatal errors
            // warn - record problems which are non fatal + errors + fatal errors
            // info - record information about the general running of the application + warn + error + fatal errors
            // debug - record information which is more verbose than info + info + warn + error + fatal errors
            // trace - record very detailed logging + debug + info + warn + error + fatal errors
            // off - turn off all logging (doesn't affect metrics or audit)
            level: "info",
            metrics: false,
            audit: false
        }
    }
}
