import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
 */
export const create = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/pickup-inspection/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
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
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
 */
create.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
 */
create.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
 */
    const createForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
 */
        createForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PickupInspectionController::create
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:28
 * @route '/admin/reservations/{reservation}/pickup-inspection/create'
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
* @see \App\Http\Controllers\Admin\PickupInspectionController::store
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:62
 * @route '/admin/reservations/{reservation}/pickup-inspection'
 */
export const store = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/reservations/{reservation}/pickup-inspection',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PickupInspectionController::store
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:62
 * @route '/admin/reservations/{reservation}/pickup-inspection'
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
* @see \App\Http\Controllers\Admin\PickupInspectionController::store
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:62
 * @route '/admin/reservations/{reservation}/pickup-inspection'
 */
store.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PickupInspectionController::store
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:62
 * @route '/admin/reservations/{reservation}/pickup-inspection'
 */
    const storeForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PickupInspectionController::store
 * @see app/Http/Controllers/Admin/PickupInspectionController.php:62
 * @route '/admin/reservations/{reservation}/pickup-inspection'
 */
        storeForm.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
const pickupInspection = {
    create: Object.assign(create, create),
store: Object.assign(store, store),
}

export default pickupInspection