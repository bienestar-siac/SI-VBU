// React
import { Fragment, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';

// Components
import Header from "../../Components/Header/Header"
import CustomBreadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs'
import WorkPlan from '../../Components/WorkPlan/WorkPlan'

// Material IU
import { Box } from "@mui/material"

// Styles
import styles from './styles'

// Handlers
import Handlers from './handlers'

export default function Process() {
    const { route, tool } = useParams();
    const [ isAvaibleRoute, set] = useState(null)

    // Handlers
    const handlers = Handlers({ plan: route, set})
    const routeCapitalized = handlers.capitalizedText(route)
    const routePrimary = handlers.capitalizedText(tool)

    // Effects
    useMemo(handlers.init,[])    

    if (isAvaibleRoute === null)
        return (
            <Box sx={styles.noFoundPage}>
                <h1>
                    Cargando Pagina...
                </h1>
            </Box>            
        )

    if (!route || isAvaibleRoute)
        return (
            <Box sx={styles.noFoundPage}>
                <h1>
                    No se encontro, ningun registro de la 
                    pagina que esta tratando de acceder
                </h1>
            </Box>            
        )

    return (
        <Fragment>
            <Box sx={styles.contPrimary}>
                <Header />
                <CustomBreadcrumbs paths={[
                    { value: 'Inicio', path: '/'}, 
                    { value: 'Modulos', path: '/modules'},
                    { value: 'Procesos', path: '/module/process'},
                    { value: `${routeCapitalized}`, path: `/module/process/${route}`},
                    { value: `${routePrimary}`, path: `/module/process/${route}`},
                ]} />
                <Box sx={styles.contPageLimit}>
                    <WorkPlan />
                </Box>
            </Box>
        </Fragment>
    )  
}