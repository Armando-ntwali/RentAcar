import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
export const inspectionsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsIndex.url(options),
    method: 'get',
})

inspectionsIndex.definition = {
    methods: ["get","head"],
    url: '/admin/inspections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
inspectionsIndex.url = (options?: RouteQueryOptions) => {
    return inspectionsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
inspectionsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
inspectionsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inspectionsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
    const inspectionsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inspectionsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
        inspectionsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
        inspectionsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inspectionsIndex.form = inspectionsIndexForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
export const inspectionsCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsCreate.url(options),
    method: 'get',
})

inspectionsCreate.definition = {
    methods: ["get","head"],
    url: '/admin/inspections/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
inspectionsCreate.url = (options?: RouteQueryOptions) => {
    return inspectionsCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
inspectionsCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
inspectionsCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inspectionsCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
    const inspectionsCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inspectionsCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
        inspectionsCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
        inspectionsCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inspectionsCreate.form = inspectionsCreateForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
export const inspectionsShow = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsShow.url(args, options),
    method: 'get',
})

inspectionsShow.definition = {
    methods: ["get","head"],
    url: '/admin/inspections/{inspection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
inspectionsShow.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inspection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { inspection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    inspection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        inspection: typeof args.inspection === 'object'
                ? args.inspection.id
                : args.inspection,
                }

    return inspectionsShow.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
inspectionsShow.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
inspectionsShow.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inspectionsShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
    const inspectionsShowForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inspectionsShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
        inspectionsShowForm.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
        inspectionsShowForm.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inspectionsShow.form = inspectionsShowForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
export const inspectionsEdit = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsEdit.url(args, options),
    method: 'get',
})

inspectionsEdit.definition = {
    methods: ["get","head"],
    url: '/admin/inspections/{inspection}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
inspectionsEdit.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inspection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { inspection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    inspection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        inspection: typeof args.inspection === 'object'
                ? args.inspection.id
                : args.inspection,
                }

    return inspectionsEdit.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
inspectionsEdit.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionsEdit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
inspectionsEdit.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inspectionsEdit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
    const inspectionsEditForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inspectionsEdit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
        inspectionsEditForm.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsEdit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsEdit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
        inspectionsEditForm.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionsEdit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inspectionsEdit.form = inspectionsEditForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsUpdate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
export const inspectionsUpdate = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: inspectionsUpdate.url(args, options),
    method: 'put',
})

inspectionsUpdate.definition = {
    methods: ["put"],
    url: '/admin/inspections/{inspection}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsUpdate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
inspectionsUpdate.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inspection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { inspection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    inspection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        inspection: typeof args.inspection === 'object'
                ? args.inspection.id
                : args.inspection,
                }

    return inspectionsUpdate.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsUpdate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
inspectionsUpdate.put = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: inspectionsUpdate.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsUpdate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
    const inspectionsUpdateForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: inspectionsUpdate.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::inspectionsUpdate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
        inspectionsUpdateForm.put = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: inspectionsUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    inspectionsUpdate.form = inspectionsUpdateForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
export const conditionReportsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditionReportsIndex.url(options),
    method: 'get',
})

conditionReportsIndex.definition = {
    methods: ["get","head"],
    url: '/admin/condition-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
conditionReportsIndex.url = (options?: RouteQueryOptions) => {
    return conditionReportsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
conditionReportsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditionReportsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
conditionReportsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conditionReportsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
    const conditionReportsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: conditionReportsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
        conditionReportsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: conditionReportsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsIndex
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
        conditionReportsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: conditionReportsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    conditionReportsIndex.form = conditionReportsIndexForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
export const conditionReportsCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditionReportsCreate.url(options),
    method: 'get',
})

conditionReportsCreate.definition = {
    methods: ["get","head"],
    url: '/admin/condition-reports/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
conditionReportsCreate.url = (options?: RouteQueryOptions) => {
    return conditionReportsCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
conditionReportsCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditionReportsCreate.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
conditionReportsCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conditionReportsCreate.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
    const conditionReportsCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: conditionReportsCreate.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
        conditionReportsCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: conditionReportsCreate.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsCreate
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
        conditionReportsCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: conditionReportsCreate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    conditionReportsCreate.form = conditionReportsCreateForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
export const conditionReportsShow = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditionReportsShow.url(args, options),
    method: 'get',
})

conditionReportsShow.definition = {
    methods: ["get","head"],
    url: '/admin/condition-reports/{inspection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
conditionReportsShow.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inspection: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { inspection: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    inspection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        inspection: typeof args.inspection === 'object'
                ? args.inspection.id
                : args.inspection,
                }

    return conditionReportsShow.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
conditionReportsShow.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditionReportsShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
conditionReportsShow.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conditionReportsShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
    const conditionReportsShowForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: conditionReportsShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
        conditionReportsShowForm.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: conditionReportsShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::conditionReportsShow
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
        conditionReportsShowForm.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: conditionReportsShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    conditionReportsShow.form = conditionReportsShowForm
const VehicleOperationsController = { inspectionsIndex, inspectionsCreate, inspectionsShow, inspectionsEdit, inspectionsUpdate, conditionReportsIndex, conditionReportsCreate, conditionReportsShow }

export default VehicleOperationsController