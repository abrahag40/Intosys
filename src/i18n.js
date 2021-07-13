import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
        "Welcome to React": "Welcome to React and react-i18next",
        "Home_porqueElegirnos": "Why Choose Intosys",
        "Home_porqueElegirnosText": "In Intosys we deliver services under the ISO 20000 quality standard, our projects are managed under ITIL best practices.",
        "Home_serviceQE": "Service, Quality and Coverage.",
        "Home_serviceQEText": "In Intosys we are a single point of contact for Information Technology Services throughout the territory of Latin America, the Caribbean Zone; USA and Canada",
        "Home_ITServices": "Broad Portfolio of IT Services.",
        "Home_ITServicesText": "In Intosys we have a wide portfolio of Information Technology services for Data Center, End User Computing and Personnel Outsourcing",
        "Home_ServicesModel": "Flexible Comprehensive Services Model.",
        "Home_ServicesModelText": "In Intosys we provide complete solutions of Information Technology Services, totally flexible, contemplating dedicated technical personnel or by event and logistics of national and international parts",
        "Home_OurCustomers": "Our Customers",
        "Home_OurCustomersText": "At Intosys we provide Information Technology services exclusively for Technology Manufacturers, Global Service Globalizers and Large Distributors of Information Technology products",
        "Home_Improvement": "Continuous Improvement and New Normality.",
        "Home_ImprovementText": "At Intosys, listening to our customers, we improve every day and are prepared for the new normal.",
        "Home_COVID-19": "COVID-19 a new normal.",
        "Home_COVID-19Text": "Learn about the health measures that we promote in our employees.",
        "Home_COVID-19Text2": "We are operating under the new normal, we respect the laws, all our service processes have preventive measures that minimize the risks of contagion.",
        "Home_COVID-19Text3": "Our collaborators have 7x24 sanitizing supplies available regionally and are supported by a COVID-19 Risk Management Protocol.",

        "OurCompany_Us": "Us",
        "OurCompany_UsText": "In Intosys we form a full oriented company to provide Information Technology services to Manufacturers of Information Technologies, Globalizers and Large Distributors. We started in 2000 and we have staff with more than 25 years of experience in Technical and Logistics Services, covering the entire American continent.",
        "OurCompany_Mission": "Mission",
        "OurCompany_MissionText": "Meet and exceed the requirements and expectations of our customers, providing reliable technical support to Information Technologies.",
        "OurCompany_Vision": "Vision",
        "OurCompany_VisionText": "To be recognized as an empres that offers solid, agile, and high-quality solutions in Information Technology Products and Services, achieving the loyalty of its internal and external customers.",
        "OurCompany_ISO": "Calidad ISO 20000",
        "OurCompany_ISOText": "In Intosys we operate under the international quality standard ISO 20000 in all our processes, seeking to keep them agile and functional based on the method of continuous improvement.",
        "OurCompany_Community": "Community",
        "OurCompany_CommunityText": "At Intosys, we agree with the idea of giving back to our community some of the much it does not give. That is why, through the NGO World Vision, we support children in precarious economic situations to receive health, clothing, and education services. Intosys is part of the \"Sponsor a Story\" program",
        
        "ServicesGeo_Technology": "Services and Geographic Coverage",
        "ServicesGeo_Logistics": "Logistics Services",
        "ServicesGeo_LogisticsTxt1": "Extensive network of warehouses for spare parts, supplies and complete equipment.",
        "ServicesGeo_LogisticsTxt2": "Geographical coverage in the most important cities of Latin America.",
        "ServicesGeo_LogisticsTxt3": "Inventory Control System via web.",
        "ServicesGeo_LogisticsTxt4": "Consulting in Software Imaging.",
        "ServicesGeo_LogisticsTxt5": "Bulk loading of Software images.",
        "ServicesGeo_LogisticsTxt6": "Labeling Services of Boxes and Computer Equipment.",
        "ServicesGeo_LogisticsTxt7": "Hardware Final Disposal Services.",

        "ServicesGeo_EndUser": "Technical Services to End User Computation.",
        "ServicesGeo_EndUserTxt1": "Bilingual Service Desk operating in 7x24.",
        "ServicesGeo_EndUserTxt2": "Field Engineering with more than 5 years of experience in attention to End User Computing.",
        "ServicesGeo_EndUserTxt3": "Corrective Maintenance Contracts.",
        "ServicesGeo_EndUserTxt4": "Service levels of 4 hours, same day, and next business day.",
        "ServicesGeo_EndUserTxt5": "Attention to Hardware Incidents by Event.",
        
        "ServicesGeo_DataCenter": "Data Center Consulting Services",
        "ServicesGeo_DataCenterTxt1": "Virtualization (Servers and VDI).",
        "ServicesGeo_DataCenterTxt2": "Server consolidation.",
        "ServicesGeo_DataCenterTxt3": "High availability.",
        "ServicesGeo_DataCenterTxt4": "Data Center Relocation.",
        "ServicesGeo_DataCenterTxt5": "Backup / restore.",
        "ServicesGeo_DataCenterTxt6": "Migration (SO, services, low-level apps).",
        "ServicesGeo_DataCenterTxt7": "Data Center special projects.",
        "ServicesGeo_DataCenterTxt8": "Migration to the public or private cloud.",
        "ServicesGeo_DataCenterTxt9": "Implementation of hybrid virtual environments.",
        "ServicesGeo_DataCenterTxt10": "Certified consultants for Data Center attention.",
        "ServicesGeo_DataCenterTxt11": "Project Management under SCRUM and PMI.",

        "ServicesGeo_DedicatedEng": "Dedicated Engineering Service",
        "ServicesGeo_DedicatedEngTxt1": "Dedicated Engineering Assignment Projects.",
        "ServicesGeo_DedicatedEngTxt2": "Expert Staff in Information Technologies.",
        "ServicesGeo_DedicatedEngTxt3": "With Backfill.",
        "ServicesGeo_DedicatedEngTxt4": "Services by hour, day, week, month, or year.",
        
        "ServicesGeo_GeographicCov": "Geographic Coverage",
        "ServicesGeo_GeographicCov1": "On-demand field services.",
        "ServicesGeo_GeographicCov2": "Bilingual rack and stack and basic configuration.",
        "ServicesGeo_GeographicCov3": "Storage of parts and complete drives.",
        "ServicesGeo_GeographicCov4": "Certified final disposition.",
        "ServicesGeo_GeographicCov5": "Laying of structured cabling for local networks.",
        "ServicesGeo_GeographicCov6": "WIFI survey (active and passive).",

        "News_Novelties": "Novelties",
        "News_NoveltiesTxt1": "In recent months stemming from the COVID-19 pandemic, Mexico and the rest of the world have faced one of the world's biggest crises, both economically and socially, and at INTOSYS we are aware of this",
        "News_NoveltiesTxt2": "This pandemic has raised new work patterns in companies, has made us adapt to a New Normal where life has taken a turn that allowed us to learn and take a step beyond where we were 9 months ago.",
        "News_NoveltiesTxt3": "Currently our operations at LATAM level have taken an evolution with guidelines according to the prevention measures of each country, the demands and needs of each of our customers.",
        "News_NoveltiesTxt4": "At Intosys we want to ensure the health of our team, therefore, we give them access to covid-19 prevention and care kits, which contain:",
        "News_NoveltiesTxt5": "We know that it is not easy to operate in this situation, but we also know that together we can get ahead and resume the economy, thanks to the effort they make every day, we remain committed to meeting and exceeding their expectations of Intosys. Thank you for trusting us.",
        "News_NoveltiesTxt6": "Thank you for trusting us.",
        "News_NoveltiesTxt7": "Director of Logistics and Service.",
        
        "Job_ProjectManager": "Project Manager",
        "Job_ProjectManagerTxt": "Achieve the efficient management of all humans, material, and infrastructure resources to maintain continuous improvement in processes, plan, organize, direct, and control the operation processes in accordance with the objectives and goals determined.",
        "Job_Dispatcher": "Dispatcher.",
        "Job_DispatcherTxt": "Coordinate in a timely manner thefield/site engineers as well as the CAS so that the attention is carried out in accordance with the customer's requirements and a high level of service can be maintained.",
        "Job_Field": "Field/Site Engineer.",
        "Job_FieldTxt": "Provide the attention of services to internal and external customers in a timely and expeditious manner to maintain a high level of service, as well as keep up to date by performing their certifications in accordance with technological advances.",
        "Job_BilingualIT": "Bilingual IT Service Desk Agent.",
        "Job_BilingualITTxt": "Raise tickets from users that are attended within the sla of response that you have with the client, as well as give follow-up, solutions and correct answers to the escalations planned for the Service Desk.",

    }
  },
  es: {
    translation: {
        "Welcome to React":"je mapell'e paquito",
        "Home_porqueElegirnos": "Porque Elegir a Intosys",
        "Home_porqueElegirnosText": "En Intosys entregamos servicios bajo la norma de calidad ISO 20000, nuestros proyectos se administran bajo las mejores prácticas de ITIL",
        "Home_serviceQE": "Servicio, Calidad y Cobertura.",
        "Home_serviceQEText": "En Intosys somos un solo punto de contacto para Servicios de Tecnologías de la Información en todo el territorio de América Latina, la Zona del Caribe; EEUU y Canadá.",
        "Home_ITServices": "Amplio Portafolio de Servicios de TI",
        "Home_ITServicesText": "En Intosys contamos con un amplio portafolio de servicios de Tecnologías de la Información para Data Center, Cómputo de Usuario Final y Outsourcing de Personal.",
        "Home_ServicesModel": "Flexible Modelo de Servicios Integrales",
        "Home_ServicesModelText": "En Intosys proveemos soluciones completas de Servicios de Tecnologías de la Información, totalmente flexibles, contemplando personal técnico dedicado o por evento y logística de partes nacional e internacional",
        "Home_OurCustomers": "Nuestros Clientes.",
        "Home_OurCustomersText": "En Intosys proveemos servicios de Tecnologías de la Información exclusivamente para Fabricantes de Tecnología, Globalizadores Mundiales de Servicio y Grandes Distribuidores de Productos de Tecnologías de la Información",
        "Home_Improvement": "Mejora Continua y Nueva Normalidad.",
        "Home_ImprovementText": "En Intosys, escuchando a nuestros clientes, mejoramos cada día y estamos preparados para la nueva normalidad",
        "Home_COVID-19": "COVID-19 una nueva normalidad",
        "Home_COVID-19Text": "Conoce las medidas de Sanidad que fomentamos en nuestros empleados.",
        "Home_COVID-19Text2": "Estamos operando bajo la nueva normalidad, respetamos las leyes, todos nuestros procesos de servicio cuentan con medidas preventivas que minimizan los riesgos de contagio.",
        "Home_COVID-19Text3": "Nuestros colaboradores cuentan con suministros sanitizantes disponibles 7x24 a nivel regional y están soportados por un Protocolo de Manejo de Riesgos de COVID-19.",

        "OurCompany_Us": "Nosotros",
        "OurCompany_UsText": "En Intosys conformamos una empresa totalmente orientada a proveer servicios de Tecnologías de la Información a Fabricantes de Tecnologías de Información, Globalizadores y Grandes Distribuidores. Iniciamos en el año 2000 y contamos con personal con más de 25 años de experiencia en Servicios Técnicos y Logísticos, cubriendo la totalidad del continente americano.",
        "OurCompany_Mission": "Misión",
        "OurCompany_MissionText": "Cumplir y exceder los requisitos y expectativas de nuestros clientes, proporcionando asistencia técnica confiable a Tecnologías de Información",
        "OurCompany_Vision": "Visión",
        "OurCompany_VisionText": "Ser reconocida como una empresa que ofrece soluciones sólidas, ágiles y de alta calidad en Productos y Servicios de Tecnologías de Información, logrando la lealtad de sus clientes internos y externos.",
        "OurCompany_ISO": "Calidad ISO 20000",
        "OurCompany_ISOText": "En Intosys operamos bajo la norma internacional de Calidad ISO 20000 en todos nuestros procesos, buscando mantenerlos ágiles y funcionales en base al método de mejora continua",
        "OurCompany_Community": "Comunidad",
        "OurCompany_CommunityText": "En Intosys, comulgamos con la idea de devolver, a nuestra comunidad, algo de lo mucho que no da. Es por eso que, a través de la ONG World Vision hacemos el apoyo a niños en situación económica precaria para recibir servicios de salud, vestido y educación. Intosys forma parte del programa “Patrocina una Historia”.",
        
        "ServicesGeo_Technology": "Servicios y Cobertura Geográfica",
        "ServicesGeo_Logistics": "Servicios de Logística",
        "ServicesGeo_LogisticsTxt1": "Amplia red de Almacenes para refacciones, suministros y equipos completos",
        "ServicesGeo_LogisticsTxt2": "Cobertura Geográfica en las ciudades más importantes de América Latina.",
        "ServicesGeo_LogisticsTxt3": "Sistema de Control de Inventarios vía web. ",
        "ServicesGeo_LogisticsTxt4": "Consultoría en Generación de Imágenes de Software.",
        "ServicesGeo_LogisticsTxt5": "Carga masiva de imágenes de Software.",
        "ServicesGeo_LogisticsTxt6": "Servicios de Etiquetado de Cajas y Equipos de Cómputo.",
        "ServicesGeo_LogisticsTxt7": "Servicios de Disposición Final de Hardware.",

        "ServicesGeo_EndUser": "Servicios Técnicos a Cómputo de Usuario Final.",
        "ServicesGeo_EndUserTxt1": "Service Desk bilingüe operando en 7x24.",
        "ServicesGeo_EndUserTxt2": "Ingeniería de Campo con más de 5 años de experiencia en atención a Cómputo de usuario final.",
        "ServicesGeo_EndUserTxt3": "Contratos de Mantenimiento Correctivo.",
        "ServicesGeo_EndUserTxt4": "Niveles de Servicio de 4 horas, mismo día y siguiente día hábil.",
        "ServicesGeo_EndUserTxt5": "Atención de Incidentes de Hardware por Evento.",
        
        "ServicesGeo_DataCenter": "Servicios de Consultoría para Data Center",
        "ServicesGeo_DataCenterTxt1": "Virtualización (Servidores y VDI).",
        "ServicesGeo_DataCenterTxt2": "Consolidación del servidor.",
        "ServicesGeo_DataCenterTxt3": "Soluciones de alta disponibilidad.",
        "ServicesGeo_DataCenterTxt4": "Reubicación de Data Center.",
        "ServicesGeo_DataCenterTxt5": "Copia de seguridad / restauración.",
        "ServicesGeo_DataCenterTxt6": "Migración (SO, servicios, aplicaciones de bajo nivel).",
        "ServicesGeo_DataCenterTxt7": "Proyectos especiales para Data Center.",
        "ServicesGeo_DataCenterTxt8": "Migración a la nube pública o privada.",
        "ServicesGeo_DataCenterTxt9": "Implementación de ambientes virtuales híbridos.",
        "ServicesGeo_DataCenterTxt10": "Consultores Certificados para atención de Data Center.",
        "ServicesGeo_DataCenterTxt11": "Administración de Proyectos bajo SCRUM y PMI.",

        "ServicesGeo_DedicatedEng": "Servicio de Ingeniería Dedicada",
        "ServicesGeo_DedicatedEngTxt1": "Proyectos de Asignación de Ingeniería dedicada.",
        "ServicesGeo_DedicatedEngTxt2": "Personal Experto en Tecnologías de Información.",
        "ServicesGeo_DedicatedEngTxt3": "Con Backfill.",
        "ServicesGeo_DedicatedEngTxt4": "Servicios por hora, día, semana, mes o año.",
        
        "ServicesGeo_GeographicCov": "Cobertura Geográfica",
        "ServicesGeo_GeographicCov1": "Servicios de campo bajo demanda.",
        "ServicesGeo_GeographicCov2": "Rack and stack bilingüe y configuración básica.",
        "ServicesGeo_GeographicCov3": "Almacenamiento de partes y unidades completas.",
        "ServicesGeo_GeographicCov4": "Disposición final certificada.",
        "ServicesGeo_GeographicCov5": "Tendido de cableado estructurado para redes locales.",
        "ServicesGeo_GeographicCov6": "WIFI survey (activa y pasiva).",

        "News_Novelties": "Noticias",
        "News_NoveltiesTxt1": "En los últimos meses derivado de la pandemia de COVID-19, México y el resto del mundo han enfrentado una de las crisis más grandes del mundo, tanto económica como socialmente y en INTOSYS somos conscientes de ello.",
        "News_NoveltiesTxt2": "Esta pandemia ha planteado nuevos esquemas de trabajo en las empresas, ha hecho que nos adaptemos a una Nueva Normalidad donde la vida a dado un giro que nos permitió aprender y dar un paso más allá de donde nos encontrábamos hace 9 meses.",
        "News_NoveltiesTxt3": "Actualmente nuestras operaciones a nivel LATAM han tomado una evolución con directrices de acuerdo con las medidas de prevención de cada país, las exigencias y necesidades de cada uno de nuestros clientes.",
        "News_NoveltiesTxt4": "En Intosys queremos asegurarnos de la salud de nuestro equipo de trabajo, por lo tanto, les damos acceso a kits de prevención y cuidado contra el COVID-19, los cuales contienen:",
        "News_NoveltiesTxt5": "Sabemos que no es fácil operar en esta situación, pero también sabemos que juntos podremos lograr salir adelante y retomar la economía, gracias al esfuerzo que realizan cada día, seguimos comprometidos con cumplir y superar sus expectativas de Intosys. ",
        "News_NoveltiesTxt6": "Gracias por confiar en nosotros.",
        "News_NoveltiesTxt7": "Director de Logística y Servicio.",
        
        "Job_ProjectManager": "Project Manager",
        "Job_ProjectManagerTxt": "Lograr el manejo eficiente de todos los recursos humanos, materiales y de infraestructura a fin de mantener la mejora continua en los procesos, planear, organizar, dirigir y controlar los procesos de operación de acuerdo con los objetivos y metas determinadas.",
        "Job_Dispatcher": "Dispatcher",
        "Job_DispatcherTxt": "Coordinar de manera oportuna a los ingenieros de campo/sitio, así como a los CAS para que la atención sea llevada a cabo de acuerdo con los requerimientos del cliente y se pueda mantener un alto nivel de servicio",
        "Job_Field": "Ingeniero de Campo/Sitio",
        "Job_FieldTxt": "Proporcionar la atención de servicios hacia los clientes internos y externos de manera oportuna y expedita para poder mantener un alto nivel de servicio, así como mantenerse actualizado realizando sus certificaciones de acuerdo con los avances tecnológicos.",
        "Job_BilingualIT": "Agente de Service Desk Biligüe IT.",
        "Job_BilingualITTxt": "Levantar tickets de los usuarios que se atiendan dentro del SLA de respuesta que se tiene con el cliente, así como dar seguimiento, soluciones y respuestas correctas a las escalaciones previstas para el Service Desk.",

    }
  },
  por: {
    translation: {
      "Home_porqueElegirnos": "Por que escolher Intosys",
      "Home_porqueElegirnosText": "Na Intosys, fornecemos serviços sob o padrão de qualidade ISO 20000, nossos projetos são gerenciados sob as melhores práticas da ITIL",
      "Home_serviceQE": "Serviço, Qualidade e Cobertura.",
      "Home_serviceQEText": "Em Intosys somos um único ponto de contato para serviços de Tecnologia da Informação em todo o território da América Latina, a Zona do Caribe; EUA e Canadá",
      "Home_ITServices": "Amplo Portfólio de Serviços de TI",
      "Home_ITServicesText": "Na Intosys temos um amplo portfólio de serviços de Tecnologia da Informação para Data Center, End User Computing e Personnel Outsourcing.",
      "Home_ServicesModel": "Modelo de Serviços Abrangentes Flexíveis.",
      "Home_ServicesModelText": "Na Intosys fornecemos soluções completas de Serviços de Tecnologia da Informação, totalmente flexíveis, contemplando pessoal técnico dedicado ou por evento e logística de peças nacionais e internacionais",
      "Home_OurCustomers": "Nossos clientes",
      "Home_OurCustomersText": "Na Intosys fornecemos serviços de Tecnologia da Informação exclusivamente para fabricantes de tecnologia, globalizadores de serviços globais e grandes distribuidores de produtos Tecnologia De informações",
      "Home_Improvement": "Melhoria Contínua e Novo Normal",
      "Home_ImprovementText": "Na Intosys, ouvindo nossos clientes, melhoramos a cada dia e estamos preparados para o novo normal.",
      "Home_COVID-19": "COVID-19 um novo normal",
      "Home_COVID-19Text": "Lear sobre as medidas de saúde que promovemos em nossos colaboradores.",
      "Home_COVID-19Text2": "Estamos operando sob o novo normal, respeitamos as leis, todos os nossos processos de atendimento têm medidas preventivas que minimizam os riscos do contágio.",
      "Home_COVID-19Text3": "Nossos colaboradores têm suprimentos higienizantes 7x24 disponíveis regionalmente e são suportados por um Protocolo de Gerenciamento de Riscos COVID-19.",

      "OurCompany_Us": "Nos",
      "OurCompany_UsText": "Na Intosys formamos uma empresa totalmente orientada para fornecer serviços de Tecnologia da Informação aos Fabricantes de Tecnologias da Informação, Globalizadores e Grandes Distribuidores. Começamos em 2000 e temos equipe com mais de 25 anos de experiência em Serviços Técnicos e Logísticos, abrangendo todo o continente americano.",
      "OurCompany_Mission": "Missão",
      "OurCompany_MissionText": "Atenda e exceda os requisitos e expectativas de nossos clientes, fornecendo suporte técnico confiável às Tecnologias da Informação",
      "OurCompany_Vision": "Visão",
      "OurCompany_VisionText": "Ser reconhecida como uma imperatriz que oferece soluções sólidas, ágeis e de alta qualidade em Produtos e Serviços de Tecnologia da Informação, alcançando a lealdade de seus clientes internos e externos.",
      "OurCompany_ISO": "Qualidade ISO 20000",
      "OurCompany_ISOText": "Na Intosys atuamos sob o padrão internacional de qualidade ISO 20000 em todos os nossos processos, buscando mantê-los ágeis e funcionais com base no método de melhoria contínua.",
      "OurCompany_Community": "Community",
      "OurCompany_CommunityText": "Na Intosys, concordamos com a ideia de devolver à nossa comunidade um pouco do que ela não dá. Por isso, por meio da ONG Visão Mundial, apoiamos crianças em situação econômica precária para receber serviços de saúde, vestuário e educação. Intosys faz parte do programa \"Patrocine uma História\".",
      
      "ServicesGeo_Technology": "Serviços e Cobertura Geográfica",
      "ServicesGeo_Logistics": "Serviços Logísticos",
      "ServicesGeo_LogisticsTxt1": "Extensa rede de armazéns para peças de reposição, suprimentos e equipamentos completos.",
      "ServicesGeo_LogisticsTxt2": "Cobertura geográfica nas cidades mais importantes da América Latina.",
      "ServicesGeo_LogisticsTxt3": "Sistema de Controle de Inventário via web.",
      "ServicesGeo_LogisticsTxt4": "Consultoria em Imagens de Software.",
      "ServicesGeo_LogisticsTxt5": "Carregamento em massa de imagens de software.",
      "ServicesGeo_LogisticsTxt6": "Serviços de rotulagem de Caixas e Equipamentos de Informática.",
      "ServicesGeo_LogisticsTxt7": "Serviços de eliminação final de hardware.",

      "ServicesGeo_EndUser": "Serviços Técnicos para Computação de Usuário Final.",
      "ServicesGeo_EndUserTxt1": "Service Desk bilíngue operando em 7x24.",
      "ServicesGeo_EndUserTxt2": "Engenharia de Campo com mais de 5 anos de experiência em atenção à Computação do Usuário Final.",
      "ServicesGeo_EndUserTxt3": "Contratos de Manutenção Corretiva.",
      "ServicesGeo_EndUserTxt4": "Níveis de serviço de 4 horas, mesmo dia e dia útil seguinte.",
      "ServicesGeo_EndUserTxt5": "Atenção aos Incidentes de Hardware por Evento.",
      
      "ServicesGeo_DataCenter": "Serviços de consultoria de Data Center:",
      "ServicesGeo_DataCenterTxt1": "Virtualização (Servidores e VDI).",
      "ServicesGeo_DataCenterTxt2": "Consolidação do servidor.",
      "ServicesGeo_DataCenterTxt3": "Soluções de alta disponibilidade.",
      "ServicesGeo_DataCenterTxt4": "Realocação do Data Center.",
      "ServicesGeo_DataCenterTxt5": "Backup/restauração.",
      "ServicesGeo_DataCenterTxt6": "Migração (SO, serviços, aplicações de baixo nível).",
      "ServicesGeo_DataCenterTxt7": "Projetos especiais para data center.",
      "ServicesGeo_DataCenterTxt8": "Migração para a nuvem pública ou privada.",
      "ServicesGeo_DataCenterTxt9": "Implementação de ambientes virtuais híbridos.",
      "ServicesGeo_DataCenterTxt10": "Consultores Certificados para Atendimento de Data Center.",
      "ServicesGeo_DataCenterTxt11": "Gerenciamento de Projetos sob SCRUM e PMI.",

      "ServicesGeo_DedicatedEng": "Serviço de Engenharia Dedicado",
      "ServicesGeo_DedicatedEngTxt1": "Projetos dedicados de atribuição de engenharia.",
      "ServicesGeo_DedicatedEngTxt2": "Equipe Especializada em Tecnologias da Informação.",
      "ServicesGeo_DedicatedEngTxt3": "Com Backfill.",
      "ServicesGeo_DedicatedEngTxt4": "Serviços por hora, dia, semana, mês ou ano.",
      
      "ServicesGeo_GeographicCov": "Cobertura Geográfica",
      "ServicesGeo_GeographicCov1": "Serviços de campo sob demanda.",
      "ServicesGeo_GeographicCov2": "Rack bilíngue e pilha e configuração básica.",
      "ServicesGeo_GeographicCov3": "Armazenamento de peças e unidades completas.",
      "ServicesGeo_GeographicCov4": "Disposição final certificada.",
      "ServicesGeo_GeographicCov5": "Colocação de cabeamento estruturado para redes locais.",
      "ServicesGeo_GeographicCov6": "Pesquisa WIFI (ativa e passiva).",

      "News_Novelties": "Notícias",
      "News_NoveltiesTxt1": "Nos últimos meses, decorrentes da pandemia COVID-19, o México e o resto do mundo enfrentaram uma das maiores crises do mundo, tanto econômica quanto socialmente, e na INTOSYS estamos cientes disso.",
      "News_NoveltiesTxt2": "Essa pandemia levantou novos padrões de trabalho nas empresas, nos fez adaptar a um Novo Normal onde a vida tomou um rumo que nos permitiu aprender e dar um passo além de onde estávamos há 9 meses.",
      "News_NoveltiesTxt3": "Atualmente, nossas operações em nível LATAM têm tido uma evolução com diretrizes de acordo com as medidas de prevenção de cada país, as demandas e necessidades de cada um de nossos clientes.",
      "News_NoveltiesTxt4": "Na Intosys queremos garantir a saúde de nossa equipe, portanto, damos a eles acesso aos kits de prevenção e cuidados covid-19, que contêm:",
      "News_NoveltiesTxt5": "Sabemos que não é fácil operar nesta situação, mas também sabemos que juntos podemos avançar e retomar a economia, graças ao esforço que eles fazem todos os dias, continuamos comprometidos em atender e superar suas expectativas de Intosys.",
      "News_NoveltiesTxt6": "Obrigado por confiar em nós.",
      "News_NoveltiesTxt7": "Diretor de Logística e Serviços.",
      
      "Job_ProjectManager": "Project Manager",
      "Job_ProjectManagerTxt": "Alcançar a gestão eficiente de todos os recursos humanos, materiais e de infraestrutura para manter a melhoria contínua nos processos, planejar, organizar, direcionar e controlar os processos de operação de acordo com os objetivos e metas determinados.",
      "Job_Dispatcher": "Dispatcher.",
      "Job_DispatcherTxt": "Coordene em tempo hábil os engenheiros de campo/local, bem como o CAS, para que a atenção seja realizada de acordo com as exigências do cliente e um alto nível de serviço possa ser mantido.",
      "Job_Field": "Engenheiro de Campo/Site.",
      "Job_FieldTxt": "Prestar a atenção dos serviços aos clientes internos e externos de forma oportuna e rápida para manter um alto nível de serviço, bem como manter-se atualizado realizando suas certificações de acordo com os avanços tecnológicos.  ",
      "Job_BilingualIT": "Service Desk Agente de TI bilíngue.",
      "Job_BilingualITTxt": "Levante os bilhetes dos usuários que são atendidos dentro do SLA de resposta que você tem com o cliente, bem como dê acompanhamento, soluções e respostas corretas para os escalonamentos planejados para o Service Desk.",

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