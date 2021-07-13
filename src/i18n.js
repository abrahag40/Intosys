import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
        "Welcome to React": "Welcome to React and react-i18next",
        "Home_porqueElegirnos": "Why choose Intosys.",
        "Home_porqueElegirnosText": "At Intosys we deliver services under the ISO 20000 quality standard, our projects are managed under ITIL best practices.",
        "Home_serviceQE": "Service, Quality and Coverage.",
        "Home_serviceQEText": "At Intosys we are a single point of contact for IT Services throughout Latin America, the Caribbean Area; USA and Canada.",
        "Home_ITServices": "Extensive IT Services Portfolio.",
        "Home_ITServicesText": "At Intosys we have a broad it service portfolio for Data Center, End User Computing and Personnel Outsourcing.",
        "Home_ServicesModel": "Flexible Integral Services Model.",
        "Home_ServicesModelText": "At Intosys we provide complete IT Services solutions, fully flexible, contemplating dedicated technical staff or by event and logistics of national and international parties.",
        "Home_OurCustomers": "Our Customers",
        "Home_OurCustomersText": "At Intosys we provide IT services exclusively for T-Ecology Manufacturers, Global Service Globalizers and Large IT Product Distributors.",
        "Home_Improvement": "Continuous Improvement and New Normality.",
        "Home_ImprovementText": "At Intosys, listening to our customers, we improve every day and are ready for the new normal.",
        "Home_VerticalMarkets": "At Intosys we specialize to dominate every vertical market of our customers.",
        "Home_VerticalMarketsText": "At Intosys we specialize to dominate every vertical market of our customers.",
        "Home_COVID-19": "COVID-19 a new normal.",
        "Home_COVID-19Text": "Learn about the health measures we encourage in our employees.",
        "Home_COVID-19Text2": "We are operating under the new normal, we respect the laws, all our service processes have preventive measures that minimize the risks of contagion.",
        "Home_COVID-19Text3": "Our partners have 7x24 sanitizing supplies available at the regional level and are supported by a COVID-19 Risk Management Protocol.",

    }
  },
  es: {
    translation: {
        "Welcome to React":"je mapell'e paquito",
        "Home_porqueElegirnos": "Porque Elegir a Intosys",
        "Home_porqueElegirnosText": "En Intosys entregamos servicios bajo la norma de calidad ISO 20000, nuestros proyectos se administran bajo las mejores prácticas de ITIL.",
        "Home_serviceQE": "Servicio, Calidad y Cobertura.",
        "Home_serviceQEText": "En Intosys somos un solo punto de contacto para Servicios de Tecnologías de la Información en todo el territorio de América Latina, la Zona del Caribe; EEUU y Canadá.",
        "Home_ITServices": "Amplio Portafolio de Servicios de TI",
        "Home_ITServicesText": "En Intosys contamos con un amplio portafolio de servicio de Tecnologías de la Información para Data Center, Cómputo de Usuario Final y Outsourcing de Personal.",
        "Home_ServicesModel": "Flexible Modelo de Servicios Integrales",
        "Home_ServicesModelText": "En Intosys proveemos soluciones completas de Servicios de Tecnologías de la Información, totalmente flexibles, contemplando personal técnico dedicado o por evento y logística de partes nacional e internacional.",
        "Home_OurCustomers": "Nuestros Clientes.",
        "Home_OurCustomersText": "En Intosys proveemos servicios de Tecnologías de la Información exclusivamente para Fabricantes de Tecnología, Globalizadores Mundiales de Servicio y Grandes Distribuidores de Productos de Tecnologías de la Información.",
        "Home_Improvement": "Mejora Continua y Nueva Normalidad.",
        "Home_ImprovementText": "En Intosys, escuchando a nuestros clientes, mejoramos cada día y estamos preparados para la nueva normalidad.",
        "Home_VerticalMarkets": "Mejora Continua y Nueva Normalidad.",
        "Home_VerticalMarketsText": "En Intosys, escuchando a nuestros clientes, mejoramos cada día y estamos preparados para la nueva normalidad.",
        "Home_COVID-19": "COVID-19 una nueva normalidad",
        "Home_COVID-19Text": "Conoce las medidas de Sanidad que fomentamos en nuestros empleados.",
        "Home_COVID-19Text2": "Estamos operando bajo la nueva normalidad, respetamos las leyes, todos nuestros procesos de servicio cuentan con medidas preventivas que minimizan los riesgos de contagio.",
        "Home_COVID-19Text3": "Nuestros colaboradores cuentan con suministros sanitizantes disponibles 7x24 a nivel regional y están soportados por un Protocolo de Manejo de Riesgos de COVID-19.",
        
    }
  },
  por: {
    translation: {
        "Welcome to React": "Welcom2222e to React and react-i18next",
        "Home_porqueElegirnos": "Why choose Intosys.",
        "Home_porqueElegirnosText": "At Intosys we deliver services under the ISO 20000 quality standard, our projects are managed under ITIL best practices.",
        "Home_serviceQE": "Service, Quality and Coverage.",
        "Home_serviceQEText": "At Intosys we are a single point of contact for IT Services throughout Latin America, the Caribbean Area; USA and Canada.",
        "Home_ITServices": "Extensive IT Services Portfolio.",
        "Home_ITServicesText": "At Intosys we have a broad it service portfolio for Data Center, End User Computing and Personnel Outsourcing.",
        "Home_ServicesModel": "Flexible Integral Services Model.",
        "Home_ServicesModelText": "At Intosys we provide complete IT Services solutions, fully flexible, contemplating dedicated technical staff or by event and logistics of national and international parties.",
        "Home_OurCustomers": "At Intosys we provide IT services exclusively for T-Ecology Manufacturers, Global Service Globalizers and Large IT Product Distributors.",
        "Home_Improvement": "Continuous Improvement and New Normality.",
        "Home_ImprovementText": "At Intosys, listening to our customers, we improve every day and are ready for the new normal.",
        "Home_VerticalMarkets": "At Intosys we specialize to dominate every vertical market of our customers.",
        "Home_VerticalMarketsText": "At Intosys we specialize to dominate every vertical market of our customers.",

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;