import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
export const create = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/client/damage-reports/{damageReport}/dispute/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
create.url = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{damageReport}', parsedArgs.damageReport.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
create.get = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
create.head = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
    const createForm = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
        createForm.get = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Client\DisputeController::create
 * @see app/Http/Controllers/Client/DisputeController.php:20
 * @route '/client/damage-reports/{damageReport}/dispute/create'
 */
        createForm.head = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Client\DisputeController::store
 * @see app/Http/Controllers/Client/DisputeController.php:56
 * @route '/client/damage-reports/{damageReport}/dispute'
 */
export const store = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/client/damage-reports/{damageReport}/dispute',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Client\DisputeController::store
 * @see app/Http/Controllers/Client/DisputeController.php:56
 * @route '/client/damage-reports/{damageReport}/dispute'
 */
store.url = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{damageReport}', parsedArgs.damageReport.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\DisputeController::store
 * @see app/Http/Controllers/Client/DisputeController.php:56
 * @route '/client/damage-reports/{damageReport}/dispute'
 */
store.post = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Client\DisputeController::store
 * @see app/Http/Controllers/Client/DisputeController.php:56
 * @route '/client/damage-reports/{damageReport}/dispute'
 */
    const storeForm = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Client\DisputeController::store
 * @see app/Http/Controllers/Client/DisputeController.php:56
 * @route '/client/damage-reports/{damageReport}/dispute'
 */
        storeForm.post = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
export const show = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/client/disputes/{dispute}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
show.url = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispute: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { dispute: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    dispute: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispute: typeof args.dispute === 'object'
                ? args.dispute.id
                : args.dispute,
                }

    return show.definition.url
            .replace('{dispute}', parsedArgs.dispute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
show.get = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
show.head = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
    const showForm = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
        showForm.get = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Client\DisputeController::show
 * @see app/Http/Controllers/Client/DisputeController.php:99
 * @route '/client/disputes/{dispute}'
 */
        showForm.head = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const DisputeController = { create, store, show }

export default DisputeController