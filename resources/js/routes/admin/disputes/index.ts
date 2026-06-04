import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/disputes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisputeController::index
 * @see app/Http/Controllers/Admin/DisputeController.php:20
 * @route '/admin/disputes'
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
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
 */
export const show = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/disputes/{dispute}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
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
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
 */
show.get = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
 */
show.head = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
 */
    const showForm = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
 */
        showForm.get = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DisputeController::show
 * @see app/Http/Controllers/Admin/DisputeController.php:69
 * @route '/admin/disputes/{dispute}'
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
/**
* @see \App\Http\Controllers\Admin\DisputeController::respond
 * @see app/Http/Controllers/Admin/DisputeController.php:98
 * @route '/admin/disputes/{dispute}/respond'
 */
export const respond = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: respond.url(args, options),
    method: 'post',
})

respond.definition = {
    methods: ["post"],
    url: '/admin/disputes/{dispute}/respond',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DisputeController::respond
 * @see app/Http/Controllers/Admin/DisputeController.php:98
 * @route '/admin/disputes/{dispute}/respond'
 */
respond.url = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return respond.definition.url
            .replace('{dispute}', parsedArgs.dispute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisputeController::respond
 * @see app/Http/Controllers/Admin/DisputeController.php:98
 * @route '/admin/disputes/{dispute}/respond'
 */
respond.post = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: respond.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DisputeController::respond
 * @see app/Http/Controllers/Admin/DisputeController.php:98
 * @route '/admin/disputes/{dispute}/respond'
 */
    const respondForm = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: respond.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisputeController::respond
 * @see app/Http/Controllers/Admin/DisputeController.php:98
 * @route '/admin/disputes/{dispute}/respond'
 */
        respondForm.post = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: respond.url(args, options),
            method: 'post',
        })
    
    respond.form = respondForm
/**
* @see \App\Http\Controllers\Admin\DisputeController::resolve
 * @see app/Http/Controllers/Admin/DisputeController.php:118
 * @route '/admin/disputes/{dispute}/resolve'
 */
export const resolve = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/admin/disputes/{dispute}/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DisputeController::resolve
 * @see app/Http/Controllers/Admin/DisputeController.php:118
 * @route '/admin/disputes/{dispute}/resolve'
 */
resolve.url = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return resolve.definition.url
            .replace('{dispute}', parsedArgs.dispute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisputeController::resolve
 * @see app/Http/Controllers/Admin/DisputeController.php:118
 * @route '/admin/disputes/{dispute}/resolve'
 */
resolve.post = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DisputeController::resolve
 * @see app/Http/Controllers/Admin/DisputeController.php:118
 * @route '/admin/disputes/{dispute}/resolve'
 */
    const resolveForm = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisputeController::resolve
 * @see app/Http/Controllers/Admin/DisputeController.php:118
 * @route '/admin/disputes/{dispute}/resolve'
 */
        resolveForm.post = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(args, options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \App\Http\Controllers\Admin\DisputeController::reject
 * @see app/Http/Controllers/Admin/DisputeController.php:143
 * @route '/admin/disputes/{dispute}/reject'
 */
export const reject = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/disputes/{dispute}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DisputeController::reject
 * @see app/Http/Controllers/Admin/DisputeController.php:143
 * @route '/admin/disputes/{dispute}/reject'
 */
reject.url = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{dispute}', parsedArgs.dispute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DisputeController::reject
 * @see app/Http/Controllers/Admin/DisputeController.php:143
 * @route '/admin/disputes/{dispute}/reject'
 */
reject.post = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DisputeController::reject
 * @see app/Http/Controllers/Admin/DisputeController.php:143
 * @route '/admin/disputes/{dispute}/reject'
 */
    const rejectForm = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DisputeController::reject
 * @see app/Http/Controllers/Admin/DisputeController.php:143
 * @route '/admin/disputes/{dispute}/reject'
 */
        rejectForm.post = (args: { dispute: string | number | { id: string | number } } | [dispute: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
const disputes = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
respond: Object.assign(respond, respond),
resolve: Object.assign(resolve, resolve),
reject: Object.assign(reject, reject),
}

export default disputes