import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../../data/Context';
import { Task } from '../../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [
      {
        key: "1",
        proyecto: "REQUISITOS CONSTRUCCIÓN, AMPLIACIÓN, OPTIMIZACIÓN, RECONSTRUCCIÓN Y REHABILITACIÓN DE SISTEMAS DE ACUEDUCTO Y ALCANTARILLADO SANITARIO Y PLUVIAL",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "2",
        proyecto: "REQUISITOS CANALIZACIONES DENTRO DEL PERIMETRO SANITARIO DE LOS MUNICIPIOS",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "3",
        proyecto: "REQUISITOS CONEXIONES INTRADOMICILIARIAS DE ACUEDUCTO Y ALCANTARILLADO",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "4",
        proyecto: "REQUISITOS DIQUES O MUROS ASOCIADOS A RIESGO EN LOS COMPONENTES DE LOS SISTEMAS DE ACUEDUCTO	",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "5",
        proyecto: "REQUISITOS CONSTRUCCIÓN, AMPLIACIÓN Y REHABILITACIÓN DE SISTEMAS DE DISPOSICIÓN FINAL",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "6",
        proyecto: "REQUISITOS CONSERVACIÓN DE MICROCUENCAS QUE ABASTECEN EL SISTEMA DE ACUEDUCTO, PROTECCIÓN DE FUENTES Y REFORESTACIÓN DE DICHAS FUENTES Y AGUAS SUBTERRÁNEAS",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "7",
        proyecto: "REQUISITOS GESTIÓN DE RIESGOS DE LOS DIFERENTES COMPONENTES DE LOS SISTEMAS DE ACUEDUCTO, ALCANTARILLADO Y/O ASEO",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "8",
        proyecto: "REQUISITOS PROYECTOS PARA LA PREVENCIÓN Y/O MITIGACIÓN DE RIESGOS DE LOS SISTEMAS DE ACUEDUCTO, ALCANTARILLADO Y/O ASEO",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "9",
        proyecto: "REQUISITOS EQUIPOS REQUERIDOS PARA LA OPERACIÓN DE LOS SISTEMAS DE ACUEDUCTO, ALCANTARILLADO Y/O ASEO",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "10",
        proyecto: "REQUISITOS ACTIVIDADES DE POSCONSTRUCCIÓN PARA LA PUESTA EN MARCHA Y/O PRUEBAS DE FUNCIONAMIENTO DE LA INFRAESTRUCTURA CONSTRUIDA PARA LOS SISTEMAS DE ACUEDUCTO	",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "11",
        proyecto: "REQUISITOS ESTUDIOS DE FACTIBILIDAD PARA LA INNOVACIÓN TECNOLÓGICA PARA OPTIMIZAR LOS TRATAMIENTOS DE DISPOSICIÓN FINAL DE RESIDUOS SÓLIDOS",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "12",
        proyecto: "REQUISITOS OBRAS Y SUMINISTRO DE INNOVACIÓN TECNOLÓGICA PARA OPTIMIZAR LOS TRATAMIENTOS DE DISPOSICIÓN FINAL DE RESIDUOS SÓLIDOS	",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
    },{
        key: "13",
        proyecto: "REQUISITOS PROYECTOS PARA LA PRESTACIÓN DE LOS SERVICIOS DE ACUEDUCTO, ALCANTARILLADO Y ASEO EN ZONAS RURALES, ZONAS DE DIFICIL ACCESO, ÁREAS DE DIFICIL GESTIÓN Y ÁREAS DE PRESTACIÓN",
        requisitos: "1. REQUISITOS DOCUMENTALES PARA LA PRESENTACIÓN DE PROYECTOS\n1,1. Carta de presentación\n1,2. Fichas MGA y EBI\n2. REQUISITOS LEGALES\n2,1. Instituto Colombiano de Antropología e Historia (ICANH)\n2,2. Aeronáutica Civil\n2,3. Permiso para el uso, la ocupación y la intervención temporal de la infraestructura vial carretera, concesionada y férrea\n2,4. Instrumentos técnicos orientadores de la planificación y gestión del territorio (POT, PBOT, EOT)\n2,5. Documentos previos por la zona de ubicación del proyecto\n2,6. Reasentamiento de población\n3. REQUISITOS INSTITUCIONALES\n3,1. Esquema organizacional\n3,2. Diagnóstico de la empresa prestadora de los servicios de acueducto, alcantarillado y/o aseo\n3,3. Fortalecimiento Institucional\n3,4. Pago de subsidios al prestador\n4. REQUISITOS TÉCNICOS	\n4,1. Formato Resumen del proyecto	\n4,2. Proyectos de Preinversión\n4,3. Antecedentes y justificación, aclarando la necesidad que se requiere solucionar con el proyecto\n4,4. Objetivos\n4,5. Alcance y actividades del proyecto	\n4,6. Productos esperados\n4,7. Impacto en términos de los indicadores del sector\n4,8. Cronograma\n4,9. Proyectos de inversión\n4,10. Estudios y Diseños\n4,11. Diagnóstico situacional de los sistemas existentes de acueducto,alcantarillado y aseo\n4,12. Evaluación de la oferta\n4,13. Evaluación de la demanda\n4,14. Formulación y análisis de alternativas y escogencia de la más favorable\n4,15. Topografía\n4,16. Estudios hidrológicos\n4,17. Estudios hidrogeológicos\n4,18. Estudio de suelos\n4,19. Diseños hidráulicos\n4,20. Diseños estructurales\n4,21. Diseños eléctricos\n4,22. Diseños electromecánicos\n4,23. Diseños arquitectónicos\n4,24. Memorias de cálculo\n4,25. Planos\n4,26. Memorias de cantidades de obra detalladas por componente\n4,27. Especificaciones técnicas de construcción particulares del proyecto\n4,28. Análisis de precios unitarios\n4,29. Cronograma de ejecución y flujo de fondos de inversión\n4,30. Certificación, funcionalidad e integralidad\n4,31. Intradomiciliarias\n4,32. Manual de Arranque y Puesta en Marcha\n4,33. Manual de Operación y Mantenimiento\n4,34. Canteras o fuentes de materiales pétreos y escombreras\n4,35. Disponibilidad de servicios\n5. REQUISITOS FINANCIEROS\n5,1. Presupuesto\n5,2. Soportes presupuestales de las fuentes de financiación del proyecto\n5,3. Plan financiero del Proyecto\n6. REQUISITOS AMBIENTALES\n6,1. Permisos de prospección, exploración y explotación de pozos\n6,2. Permiso de concesión de agua\n6,3. Permiso de ocupación de cauce\n6,4. Plan de Saneamiento y Manejo de Vertimientos (PSMV)\n6,5. Permiso de vertimientos\n6,6. Licencia Ambiental\n7. REQUISITOS PREDIALES\n7,1. Predios\n7,2. Servidumbres\n7,3. Autorizaciones de paso\n7,4. Soluciones individuales en agua y saneamiento",
      }
    ],
    isModalVisible: false,
    selectedTask: null
  };

  render() {
    const {
      state: {
        todoList,
        isModalVisible,
        selectedTask
      },
    } = this;

    return (
      <Context.Consumer>
        {() => (
          <>
            {selectedTask !== null && (
              <Task isModalVisible={isModalVisible}>
                <View style={styles.taskContainer}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Nombre de Proyecto
                  </Text>
                  <Text style={styles.titlep}>
                    {selectedTask.proyecto}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <ScrollView>
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Requisitos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.requisitos}
                    </Text>
                  </View>
                  </ScrollView>
                  <View style={styles.sepeerator} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          isModalVisible: !isModalVisible,
                        });
                      }}
                      style={styles.backButton}
                    >
                      <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>
                        Volver
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Task>
            )}
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4" }}>
              <ScrollView>
                <Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color: "#18eac2" }}>
                Proyectos:
                </Text>
                <View style = {{ marginBottom:30 }}>
                  {todoList.map(item => (
                    <TouchableOpacity
                    onPress={() => {
                      this.setState({
                          selectedTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#7c7f7f', fontSize: 15, fontWeight: '700' }}>
                            {item.proyecto}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </Context.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  taskListContent: {
    height: 80,
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    marginTop: 5,
    marginBottom:5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#2E66E7',
    width: 200,
    height: 38,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 20,
  },
  sepeerator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#979797',
    alignSelf: 'center',
    marginVertical: 20,
  },
  notesContent: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#979797',
    alignSelf: 'center',
    marginVertical: 20,
  },
  titlep: {
    borderColor: '#07FF',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
  title: {
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
  taskContainer: {
    height: Dimensions.get('window').height -80,
    width: Dimensions.get('window').width - 10,
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
    padding: 22
  },
});