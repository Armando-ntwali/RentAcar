import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
export const show = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/fleet/{car}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
show.url = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { car: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: typeof args.car === 'object'
                ? args.car.id
                : args.car,
                }

    return show.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
show.get = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
show.head = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
    const showForm = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
        showForm.get = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BookingController::show
 * @see app/Http/Controllers/BookingController.php:15
 * @route '/fleet/{car}'
 */
        showForm.head = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\BookingController::book
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/fleet/{car}'
 */
export const book = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: book.url(args, options),
    method: 'post',
})

book.definition = {
    methods: ["post"],
    url: '/fleet/{car}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookingController::book
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/fleet/{car}'
 */
book.url = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { car: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: typeof args.car === 'object'
                ? args.car.id
                : args.car,
                }

    return book.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::book
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/fleet/{car}'
 */
book.post = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: book.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BookingController::book
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/fleet/{car}'
 */
    const bookForm = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: book.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookingController::book
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/fleet/{car}'
 */
        bookForm.post = (args: { car: string | number | { id: string | number } } | [car: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: book.url(args, options),
            method: 'post',
        })
    
    book.form = bookForm
/**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
export const confirmation = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmation.url(args, options),
    method: 'get',
})

confirmation.definition = {
    methods: ["get","head"],
    url: '/booking/{reservation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
confirmation.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return confirmation.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
confirmation.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmation.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
confirmation.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmation.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
    const confirmationForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: confirmation.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
        confirmationForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: confirmation.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BookingController::confirmation
 * @see app/Http/Controllers/BookingController.php:90
 * @route '/booking/{reservation}'
 */
        confirmationForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: confirmation.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    confirmation.form = confirmationForm
const BookingController = { show, book, confirmation }

export default BookingController