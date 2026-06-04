import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
const damageReports = {
    create: Object.assign(create, create),
store: Object.assign(store, store),
resolve: Object.assign(resolve, resolve),
reject: Object.assign(reject, reject),
}

export default damageReports