import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
const damageReports = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default damageReports