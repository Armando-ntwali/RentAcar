import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
export const create = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/damage-reports/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
create.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reservation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { reservation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    reservation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        reservation: typeof args.reservation === 'object'
                ? args.reservation.id
                : args.reservation,
                }

    return create.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
create.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
create.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
    const createForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
        createForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DamageReportController::create
 * @see app/Http/Controllers/Admin/DamageReportController.php:83
 * @route '/admin/reservations/{reservation}/damage-reports/create'
 */
        createForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\DamageReportController::store
 * @see app/Http/Controllers/Admin/DamageReportController.php:120
 * @route '/admin/reservations/{reservation}/damage-reports'
 */
export const store = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/reservations/{reservation}/damage-reports',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::store
 * @see app/Http/Controllers/Admin/DamageReportController.php:120
 * @route '/admin/reservations/{reservation}/damage-reports'
 */
store.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reservation: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { reservation: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    reservation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        reservation: typeof args.reservation === 'object'
                ? args.reservation.id
                : args.reservation,
                }

    return store.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::store
 * @see app/Http/Controllers/Admin/DamageReportController.php:120
 * @route '/admin/reservations/{reservation}/damage-reports'
 */
store.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::store
 * @see app/Http/Controllers/Admin/DamageReportController.php:120
 * @route '/admin/reservations/{reservation}/damage-reports'
 */
    const storeForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::store
 * @see app/Http/Controllers/Admin/DamageReportController.php:120
 * @route '/admin/reservations/{reservation}/damage-reports'
 */
        storeForm.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/damage-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DamageReportController::index
 * @see app/Http/Controllers/Admin/DamageReportController.php:23
 * @route '/admin/damage-reports'
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
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
export const show = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/damage-reports/{damage_report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
show.url = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { damage_report: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { damage_report: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    damage_report: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        damage_report: typeof args.damage_report === 'object'
                ? args.damage_report.id
                : args.damage_report,
                }

    return show.definition.url
            .replace('{damage_report}', parsedArgs.damage_report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
show.get = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
show.head = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
    const showForm = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
        showForm.get = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DamageReportController::show
 * @see app/Http/Controllers/Admin/DamageReportController.php:164
 * @route '/admin/damage-reports/{damage_report}'
 */
        showForm.head = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
export const edit = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/damage-reports/{damage_report}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
edit.url = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { damage_report: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { damage_report: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    damage_report: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        damage_report: typeof args.damage_report === 'object'
                ? args.damage_report.id
                : args.damage_report,
                }

    return edit.definition.url
            .replace('{damage_report}', parsedArgs.damage_report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
edit.get = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
edit.head = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
    const editForm = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
        editForm.get = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DamageReportController::edit
 * @see app/Http/Controllers/Admin/DamageReportController.php:192
 * @route '/admin/damage-reports/{damage_report}/edit'
 */
        editForm.head = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
export const update = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/damage-reports/{damage_report}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
update.url = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { damage_report: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { damage_report: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    damage_report: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        damage_report: typeof args.damage_report === 'object'
                ? args.damage_report.id
                : args.damage_report,
                }

    return update.definition.url
            .replace('{damage_report}', parsedArgs.damage_report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
update.put = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
update.patch = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
    const updateForm = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
        updateForm.put = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\DamageReportController::update
 * @see app/Http/Controllers/Admin/DamageReportController.php:218
 * @route '/admin/damage-reports/{damage_report}'
 */
        updateForm.patch = (args: { damage_report: string | number | { id: string | number } } | [damage_report: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\DamageReportController::resolve
 * @see app/Http/Controllers/Admin/DamageReportController.php:237
 * @route '/admin/damage-reports/{damageReport}/resolve'
 */
export const resolve = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/admin/damage-reports/{damageReport}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::resolve
 * @see app/Http/Controllers/Admin/DamageReportController.php:237
 * @route '/admin/damage-reports/{damageReport}/resolve'
 */
resolve.url = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { damageReport: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { damageReport: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    damageReport: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        damageReport: typeof args.damageReport === 'object'
                ? args.damageReport.id
                : args.damageReport,
                }

    return resolve.definition.url
            .replace('{damageReport}', parsedArgs.damageReport.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::resolve
 * @see app/Http/Controllers/Admin/DamageReportController.php:237
 * @route '/admin/damage-reports/{damageReport}/resolve'
 */
resolve.post = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::resolve
 * @see app/Http/Controllers/Admin/DamageReportController.php:237
 * @route '/admin/damage-reports/{damageReport}/resolve'
 */
    const resolveForm = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::resolve
 * @see app/Http/Controllers/Admin/DamageReportController.php:237
 * @route '/admin/damage-reports/{damageReport}/resolve'
 */
        resolveForm.post = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(args, options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \App\Http\Controllers\Admin\DamageReportController::reject
 * @see app/Http/Controllers/Admin/DamageReportController.php:255
 * @route '/admin/damage-reports/{damageReport}/reject'
 */
export const reject = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/damage-reports/{damageReport}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DamageReportController::reject
 * @see app/Http/Controllers/Admin/DamageReportController.php:255
 * @route '/admin/damage-reports/{damageReport}/reject'
 */
reject.url = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { damageReport: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { damageReport: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    damageReport: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        damageReport: typeof args.damageReport === 'object'
                ? args.damageReport.id
                : args.damageReport,
                }

    return reject.definition.url
            .replace('{damageReport}', parsedArgs.damageReport.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DamageReportController::reject
 * @see app/Http/Controllers/Admin/DamageReportController.php:255
 * @route '/admin/damage-reports/{damageReport}/reject'
 */
reject.post = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DamageReportController::reject
 * @see app/Http/Controllers/Admin/DamageReportController.php:255
 * @route '/admin/damage-reports/{damageReport}/reject'
 */
    const rejectForm = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DamageReportController::reject
 * @see app/Http/Controllers/Admin/DamageReportController.php:255
 * @route '/admin/damage-reports/{damageReport}/reject'
 */
        rejectForm.post = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
const DamageReportController = { create, store, index, show, edit, update, resolve, reject }

export default DamageReportController