import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::index
 * @see app/Http/Controllers/Admin/ReportsController.php:30
 * @route '/admin/reports'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
export const reservations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reservations.url(options),
    method: 'get',
})

reservations.definition = {
    methods: ["get","head"],
    url: '/admin/reports/reservations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
reservations.url = (options?: RouteQueryOptions) => {
    return reservations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
reservations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reservations.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
reservations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reservations.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
    const reservationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: reservations.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
        reservationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: reservations.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::reservations
 * @see app/Http/Controllers/Admin/ReportsController.php:47
 * @route '/admin/reports/reservations'
 */
        reservationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: reservations.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    reservations.form = reservationsForm
/**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
export const vehicleConditionHistory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: vehicleConditionHistory.url(options),
    method: 'get',
})

vehicleConditionHistory.definition = {
    methods: ["get","head"],
    url: '/admin/reports/vehicle-condition-history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
vehicleConditionHistory.url = (options?: RouteQueryOptions) => {
    return vehicleConditionHistory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
vehicleConditionHistory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: vehicleConditionHistory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
vehicleConditionHistory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: vehicleConditionHistory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
    const vehicleConditionHistoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: vehicleConditionHistory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
        vehicleConditionHistoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: vehicleConditionHistory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::vehicleConditionHistory
 * @see app/Http/Controllers/Admin/ReportsController.php:89
 * @route '/admin/reports/vehicle-condition-history'
 */
        vehicleConditionHistoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: vehicleConditionHistory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    vehicleConditionHistory.form = vehicleConditionHistoryForm
/**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
export const inspections = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspections.url(options),
    method: 'get',
})

inspections.definition = {
    methods: ["get","head"],
    url: '/admin/reports/inspections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
inspections.url = (options?: RouteQueryOptions) => {
    return inspections.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
inspections.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspections.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
inspections.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inspections.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
    const inspectionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inspections.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
        inspectionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspections.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::inspections
 * @see app/Http/Controllers/Admin/ReportsController.php:137
 * @route '/admin/reports/inspections'
 */
        inspectionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspections.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inspections.form = inspectionsForm
/**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
export const damageReports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: damageReports.url(options),
    method: 'get',
})

damageReports.definition = {
    methods: ["get","head"],
    url: '/admin/reports/damage-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
damageReports.url = (options?: RouteQueryOptions) => {
    return damageReports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
damageReports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: damageReports.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
damageReports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: damageReports.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
    const damageReportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: damageReports.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
        damageReportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: damageReports.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::damageReports
 * @see app/Http/Controllers/Admin/ReportsController.php:179
 * @route '/admin/reports/damage-reports'
 */
        damageReportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: damageReports.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    damageReports.form = damageReportsForm
/**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
export const disputes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: disputes.url(options),
    method: 'get',
})

disputes.definition = {
    methods: ["get","head"],
    url: '/admin/reports/disputes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
disputes.url = (options?: RouteQueryOptions) => {
    return disputes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
disputes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: disputes.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
disputes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: disputes.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
    const disputesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: disputes.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
        disputesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: disputes.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::disputes
 * @see app/Http/Controllers/Admin/ReportsController.php:221
 * @route '/admin/reports/disputes'
 */
        disputesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: disputes.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    disputes.form = disputesForm
/**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
export const frequentDamage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: frequentDamage.url(options),
    method: 'get',
})

frequentDamage.definition = {
    methods: ["get","head"],
    url: '/admin/reports/frequent-damage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
frequentDamage.url = (options?: RouteQueryOptions) => {
    return frequentDamage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
frequentDamage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: frequentDamage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
frequentDamage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: frequentDamage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
    const frequentDamageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: frequentDamage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
        frequentDamageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: frequentDamage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportsController::frequentDamage
 * @see app/Http/Controllers/Admin/ReportsController.php:262
 * @route '/admin/reports/frequent-damage'
 */
        frequentDamageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: frequentDamage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    frequentDamage.form = frequentDamageForm
const ReportsController = { index, reservations, vehicleConditionHistory, inspections, damageReports, disputes, frequentDamage }

export default ReportsController