import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/condition-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::index
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:86
 * @route '/admin/condition-reports'
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
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/condition-reports/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::create
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:100
 * @route '/admin/condition-reports/create'
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
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
export const show = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/condition-reports/{inspection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
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
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
show.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
show.head = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
    const showForm = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
 */
        showForm.get = (args: { inspection: string | number | { id: string | number } } | [inspection: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\VehicleOperationsController::show
 * @see app/Http/Controllers/Admin/VehicleOperationsController.php:113
 * @route '/admin/condition-reports/{inspection}'
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
const conditionReports = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
show: Object.assign(show, show),
}

export default conditionReports