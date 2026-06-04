import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
 */
export const create = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/return-inspection/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
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
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
 */
create.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
 */
create.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
 */
    const createForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
 */
        createForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::create
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:29
 * @route '/admin/reservations/{reservation}/return-inspection/create'
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
* @see \App\Http\Controllers\Admin\ReturnInspectionController::store
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:75
 * @route '/admin/reservations/{reservation}/return-inspection'
 */
export const store = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/reservations/{reservation}/return-inspection',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::store
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:75
 * @route '/admin/reservations/{reservation}/return-inspection'
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
* @see \App\Http\Controllers\Admin\ReturnInspectionController::store
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:75
 * @route '/admin/reservations/{reservation}/return-inspection'
 */
store.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::store
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:75
 * @route '/admin/reservations/{reservation}/return-inspection'
 */
    const storeForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::store
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:75
 * @route '/admin/reservations/{reservation}/return-inspection'
 */
        storeForm.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
export const compare = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compare.url(args, options),
    method: 'get',
})

compare.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/inspection-comparison',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
compare.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return compare.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
compare.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compare.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
compare.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: compare.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
    const compareForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: compare.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
        compareForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: compare.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::compare
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
        compareForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: compare.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    compare.form = compareForm
const ReturnInspectionController = { create, store, compare }

export default ReturnInspectionController