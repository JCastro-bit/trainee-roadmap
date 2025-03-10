import React from 'react';

// Define types for the data structures
interface Skill {
  name: string;
  skills: string[];
  level: string;
  iconPath: string;
}

interface Phase {
  id: number;
  title: string;
  period: string;
  color: string;
  areas: Skill[];
}

// Props for our components
interface IconProps {
  path: string;
}

interface PhaseCardProps {
  phase: Phase;
}

const LearningPathEmpresarial: React.FC = () => {
  const phases: Phase[] = [
    {
      id: 1,
      title: "Fundamentos Backend + Mejora Frontend",
      period: "Meses 1-3",
      color: "#3182CE",
      areas: [
        {
          name: "Backend (Java)",
          skills: ["Java Core", "Spring Boot", "Spring MVC", "Controladores"],
          level: "Fundamentos",
          iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        },
        {
          name: "MySQL",
          skills: ["Modelado relacional", "Consultas complejas", "Procedimientos", "Optimización"],
          level: "Avanzado",
          iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        },
        {
          name: "Angular",
          skills: ["Componentes", "Servicios", "Directivas", "Pipes"],
          level: "Fundamentos",
          iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        }
      ]
    },
    {
      id: 2,
      title: "Integración Backend y APIs",
      period: "Meses 4-6",
      color: "#38A169",
      areas: [
        {
          name: "Backend (.NET)",
          skills: ["C#", "ASP.NET Core", "Entity Framework", "APIs"],
          level: "Fundamentos",
          iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        },
        {
          name: "RESTful APIs",
          skills: ["Diseño de recursos", "Versionado", "Swagger/OpenAPI", "Seguridad básica"],
          level: "Intermedio",
          iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
          name: "Angular",
          skills: ["NgRx", "RxJS", "Material", "HTTP Client"],
          level: "Intermedio",
          iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        }
      ]
    },
    {
      id: 3,
      title: "Integración y Seguridad",
      period: "Meses 7-9",
      color: "#805AD5",
      areas: [
        {
          name: "Backend (Java EE)",
          skills: ["JPA/Hibernate", "Spring Security", "Microservicios", "Spring Cloud"],
          level: "Avanzado",
          iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        },
        {
          name: "DevOps",
          skills: ["Jenkins/Azure DevOps", "Tests automatizados", "CI/CD"],
          level: "Básico",
          iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        },
        {
          name: "Seguridad",
          skills: ["OAuth 2.0", "JWT", "OWASP", "Autenticación/Autorización"],
          level: "Intermedio",
          iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }
      ]
    },
    {
      id: 4,
      title: "Especialización Empresarial",
      period: "Meses 10-12",
      color: "#DD6B20",
      areas: [
        {
          name: "Arquitectura",
          skills: ["Clean Architecture", "Domain-Driven Design", "Patrones empresariales"],
          level: "Intermedio",
          iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
          name: "Rendimiento",
          skills: ["Caching (Redis)", "Optimización MySQL", "Monitoreo", "Profiling"],
          level: "Intermedio",
          iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
          name: "Proyecto Final",
          skills: ["Angular + Material", "Java + .NET", "MySQL", "CI/CD", "Cloud"],
          level: "Integración",
          iconPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        }
      ]
    }
  ];

  // Crea un ícono SVG basado en la ruta proporcionada
  const Icon: React.FC<IconProps> = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  // Componente para mostrar cada fase del roadmap
  const PhaseCard: React.FC<PhaseCardProps> = ({ phase }) => (
    <div className="mb-8">
      <div 
        className="p-4 rounded-lg shadow-md" 
        style={{ backgroundColor: `${phase.color}20`, borderLeft: `4px solid ${phase.color}` }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg" style={{ color: phase.color }}>
            Fase {phase.id}: {phase.title}
          </h3>
          <span className="bg-gray-200 px-2 py-1 rounded text-sm">{phase.period}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {phase.areas.map((area, idx) => (
            <div key={idx} className="bg-white p-3 rounded shadow-sm">
              <div className="flex items-center mb-2">
                <div className="mr-2 text-gray-700">
                  <Icon path={area.iconPath} />
                </div>
                <h4 className="font-semibold">{area.name}</h4>
              </div>
              <div className="mb-2">
                <span 
                  className="text-xs px-2 py-1 rounded" 
                  style={{ backgroundColor: `${phase.color}20`, color: phase.color }}
                >
                  {area.level}
                </span>
              </div>
              <ul className="text-sm space-y-1 mt-2">
                {area.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full mr-2" style={{ backgroundColor: phase.color }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 max-w-full">
      <h2 className="text-2xl font-bold text-center mb-6">Plan de Desarrollo Full Stack Empresarial</h2>
      <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">América Lizette Ruiz Gutiérrez</h3>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-bold mb-2">Tecnologías Prioritarias Empresariales</h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-sm">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <span className="font-bold text-green-700">Java</span>
            </div>
            <span className="text-xs">Backend</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <span className="font-bold text-blue-700">.NET</span>
            </div>
            <span className="text-xs">Backend</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
              <span className="font-bold text-orange-700">SQL</span>
            </div>
            <span className="text-xs">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
              <span className="font-bold text-red-700">Ang</span>
            </div>
            <span className="text-xs">Angular</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <span className="font-bold text-purple-700">REST</span>
            </div>
            <span className="text-xs">RESTful APIs</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-2">
              <span className="font-bold text-cyan-700">🐳</span>
            </div>
            <span className="text-xs">Docker/Rancher</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="font-bold mb-2 text-yellow-800">Proyectos Integradores</h3>
        <div className="space-y-3">
          <div className="flex">
            <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
            <div>
              <p className="font-semibold">Sistema de Gestión de Inventario</p>
              <p className="text-sm text-gray-600">Spring Boot + MySQL + Angular</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
            <div>
              <p className="font-semibold">Portal de Clientes Multibackend</p>
              <p className="text-sm text-gray-600">Java + .NET + Angular Material + RESTful APIs</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
            <div>
              <p className="font-semibold">Sistema de Gestión de Tickets Seguro</p>
              <p className="text-sm text-gray-600">Microservicios + Seguridad + DevOps + CI/CD</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-orange-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</div>
            <div>
              <p className="font-semibold">Plataforma Empresarial Integrada</p>
              <p className="text-sm text-gray-600">Arquitectura avanzada + Optimización + Cloud</p>
            </div>
          </div>
        </div>
      </div>
      
      {phases.map(phase => (
        <PhaseCard key={phase.id} phase={phase} />
      ))}
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-bold mb-2">Certificaciones Recomendadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <p className="font-semibold text-blue-700">Spring Framework Developer</p>
            <p className="text-xs text-gray-600 mt-1">Validación oficial de habilidades Java/Spring</p>
          </div>
          <div className="p-3 bg-purple-50 border border-purple-200 rounded">
            <p className="font-semibold text-purple-700">Microsoft Certified: Azure Developer</p>
            <p className="text-xs text-gray-600 mt-1">Validación para desarrollo .NET y cloud</p>
          </div>
          <div className="p-3 bg-red-50 border border-red-200 rounded">
            <p className="font-semibold text-red-700">Angular Developer Certification</p>
            <p className="text-xs text-gray-600 mt-1">Validación oficial de habilidades Angular</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathEmpresarial;