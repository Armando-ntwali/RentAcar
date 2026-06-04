import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/inspections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:16
 * @route '/admin/inspections'
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
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/inspections/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:29
 * @route '/admin/inspections/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
export const show = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/inspections/{inspection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
show.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
show.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
show.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
    const showForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
        showForm.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:42
 * @route '/admin/inspections/{inspection}'
 */
        showForm.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
export const edit = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/inspections/{inspection}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
edit.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
edit.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
edit.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
    const editForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
        editForm.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::edit
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:58
 * @route '/admin/inspections/{inspection}/edit'
 */
        editForm.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\VehicleOperationsController::update
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
export const update = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/inspections/{inspection}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::update
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
update.url = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{inspection}', parsedArgs.inspection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::update
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
update.put = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::update
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
    const updateForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::update
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:68
 * @route '/admin/inspections/{inspection}'
 */
        updateForm.put = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const inspections = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default inspections