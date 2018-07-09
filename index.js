import { createStore } from 'redux'
import { update } from 'yo-yo'
import Router from 'sheet-router'

import reducer from './reducer'

import Services from './components'
import About from './components/about'
import Contact from './components/contact'
import Service from './components/service'
import ConnectionsOption from './components/connections-option'
import The404 from './components/404'

const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = {
  title: 'Independent Electrical Inspectors Otago',
  route: '/',
  menu: [
    {route: '/', label: 'Services'},
    {route: '/about', label: 'About'},
    {route: '/contact', label: 'Contact'}
  ],
  currentService: {
    name: 'blank'
  },
  services: [
    {
      name: 'Property Inspections',
      route: '/service',
      title: 'Property Inspection',
      image: 'images/pi.jpg',
      blurb: "There are many reasons why you could need an electrical test or inspection on your property or electrical items. It could be for insurance purposes, landlord's inspection, change of use, ownership or even just for your own peace of mind.",
      contentLeft: [
        {heading: 'Did You Know?', paragraphs: ["All electrical systems deteriorate with age and/or use so it is important that they are maintained regularly to ensure that the safety of people around the system are not at risk."]},
        {heading: 'WHAT DOES A PROPERTY INSPECTION INVOLVE?', paragraphs: ["An inspection will reveal potential hazards within the tested installation, check for earth and bonding (or the lack of it), as well as identify any defective work whilst checking all the fixed wiring. This includes testing RCDs to make sure they trip under fault conditions and checking fuse and circuit breaker ratings. Our report also lists non-compliant wiring or fittings."]},
        {heading: 'WHY IS A PROPERTY INSPECTION IMPORTANT?', paragraphs: ["When buying a property for yourself or an investment property it is important to know the condition of the electrical installation of your prospective purchase as unknown or unforeseen problems can soon consume a substantial portion of your budget."]},
        {heading: 'WHERE DO I GET A PROPERTY INSPECTION DONE?', paragraphs: ["With an in depth knowledge of the regulations and standards appropriate to the age of the property IEIO will visit the property, carry out the inspection and discuss the findings."]}
      ],
      contentRight: [
        {heading: 'HOW DO I BOOK A PROPERTY INSPECTION?', paragraphs: ["Contact us to make an appointment", "You will need to provide your name, address, phone, email address (for the report to be sent to you) and the address of the property to be inspected.", "Often it is also necessary to provide the Real Estate agent’s contact details so access can be arranged for the inspection.", '<a class="image fit"><img src="images/pi.jpg" alt="" /></a>']}
      ]
    },
    {
      name: 'ELECTRICAL WOF',
      route: '/service',
      title: 'ELECTRICAL WARRANT OF FITNESS',
      image: 'images/ew.jpg',
      blurb: `<a class="image fit"><img src="images/ew.jpg" alt="" /></a>`,
      contentLeft: [
        {heading: 'Did You Know?', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]}
      ],
      contentRight: [
        {heading: 'blahblah', paragraphs: ["Contact us to make an appointment", "blah", "blah"]}
      ]
    },
    {
      name: 'ELECTRICAL WOF',
      route: '/service',
      title: 'ELECTRICAL WARRANT OF FITNESS',
      image: 'images/ew.jpg',
      blurb: "blah",
      contentLeft: [
        {heading: 'Did You Know?', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]}
      ],
      contentRight: [
        {heading: 'blahblah', paragraphs: ["Contact us to make an appointment", "blah", "blah"]}
      ]
    },
    {
      name: 'CONNECTIONS',
      route: '/connections-option',
      title: 'CONNECTIONS',
      image: 'images/c.jpg',
      blurb: "",
      contentLeft: [
        {heading: 'Did you need a', paragraphs: ['<ul class="actions special"><li><a onclick=${() => changePageToService(state.exceptionServices[0])} class="button">Reconnection</a></li></ul>']}
      ],
      contentRight: [
        {heading: 'Or A', paragraphs: ['<ul class="actions special"><li><a href="reconnection.html" class="button">New Connection</a></li></ul>']}
      ]
    },
    {
      name: 'ELECTRICAL WOF',
      route: '/service',
      title: 'ELECTRICAL WARRANT OF FITNESS',
      image: 'images/ew.jpg',
      blurb: "blah",
      contentLeft: [
        {heading: 'Did You Know?', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]}
      ],
      contentRight: [
        {heading: 'blahblah', paragraphs: ["Contact us to make an appointment", "blah", "blah"]}
      ]
    },
    {
      name: 'ELECTRICAL UPGRADES',
      route: '/service',
      title: 'ELECTRICAL UPGRADES',
      image: 'images/eu.jpg',
      blurb: "",
      contentLeft: [
        {heading: 'How do I arrange for a Renewal of mains inspection?', paragraphs: ['You or your electrician will need to complete a <a href="https://www.auroraenergy.co.nz/assets/Forms/AE-F008-Aurora-Application.pdf" target="_blank" >network application form</a> to notify the network that you wish to change your mains.', 'Contact your Energy Retailer, giving them the address or ICP number of the building to arrange a service request to reseal the meter.', 'Have your electrician contact IEIO for the high-risk mains inspection. We can arrange the revenue meter resealing to coincide with our inspection.']},
        {heading: 'HOW DO I UPGRADE MY MAIN EARTH?', paragraphs: ["Have your electrician contact IEIO to arrange an inspection, when he has completed his part of the work.", '<a class="image fit"><img src="images/eu.jpg" alt="" /></a>']},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]}
      ],
      contentRight: [
        {heading: 'blahblah', paragraphs: ["Contact us to make an appointment", "blah", "blah"]}
      ]
    }
  ],
  exceptionServices: [
    {
      name: 'Reconnection',
      route: '/service',
      title: 'Reconnection',
      image: 'images/ew.jpg',
      blurb: "blah",
      contentLeft: [
        {heading: 'Did You Know?', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]}
      ],
      contentRight: [
        {heading: 'blahblah', paragraphs: ["Contact us to make an appointment", "blah", "blah"]}
      ]
    },
    {
      name: 'New Connection',
      route: '/service',
      title: 'New Connection',
      image: 'images/ew.jpg',
      blurb: "blah",
      contentLeft: [
        {heading: 'Did You Know?', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]},
        {heading: 'blah', paragraphs: ["blah"]}
      ],
      contentRight: [
        {heading: 'blahblah', paragraphs: ["Contact us to make an appointment", "blah", "blah"]}
      ]
    }
  ],
  lastRoute: 'lemon'
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Services],
  ['/about', (params) => About],
  ['/contact', (params) => Contact],
  ['/service', (params) => Service],
  ['/connections-option', (params) => ConnectionsOption],
  ['/404', (params) => The404]
])

subscribe(() => {
  const state = getState()
  const newView = route(state.route)(state, dispatch)
  update(initView, newView)
})

dispatch({type: 'lemon'})
