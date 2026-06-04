import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/reservations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReservationsController::index
 * @see app/Http/Controllers/Admin/ReservationsController.php:25
 * @route '/admin/reservations'
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
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
export const show = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
show.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
show.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
show.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
    const showForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
        showForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReservationsController::show
 * @see app/Http/Controllers/Admin/ReservationsController.php:87
 * @route '/admin/reservations/{reservation}'
 */
        showForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
export const edit = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
edit.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
edit.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
edit.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
    const editForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
        editForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReservationsController::edit
 * @see app/Http/Controllers/Admin/ReservationsController.php:101
 * @route '/admin/reservations/{reservation}/edit'
 */
        editForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
export const update = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/reservations/{reservation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
update.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
update.put = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
update.patch = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
    const updateForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
        updateForm.put = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\ReservationsController::update
 * @see app/Http/Controllers/Admin/ReservationsController.php:116
 * @route '/admin/reservations/{reservation}'
 */
        updateForm.patch = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
export const print = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(args, options),
    method: 'get',
})

print.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/print',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
print.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return print.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
print.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: print.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
print.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: print.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
    const printForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: print.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
        printForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: print.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReservationsController::print
 * @see app/Http/Controllers/Admin/ReservationsController.php:203
 * @route '/admin/reservations/{reservation}/print'
 */
        printForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: print.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    print.form = printForm
/**
* @see \App\Http\Controllers\Admin\ReservationsController::approve
 * @see app/Http/Controllers/Admin/ReservationsController.php:161
 * @route '/admin/reservations/{reservation}/approve'
 */
export const approve = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/admin/reservations/{reservation}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::approve
 * @see app/Http/Controllers/Admin/ReservationsController.php:161
 * @route '/admin/reservations/{reservation}/approve'
 */
approve.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return approve.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::approve
 * @see app/Http/Controllers/Admin/ReservationsController.php:161
 * @route '/admin/reservations/{reservation}/approve'
 */
approve.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::approve
 * @see app/Http/Controllers/Admin/ReservationsController.php:161
 * @route '/admin/reservations/{reservation}/approve'
 */
    const approveForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::approve
 * @see app/Http/Controllers/Admin/ReservationsController.php:161
 * @route '/admin/reservations/{reservation}/approve'
 */
        approveForm.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\Admin\ReservationsController::reject
 * @see app/Http/Controllers/Admin/ReservationsController.php:180
 * @route '/admin/reservations/{reservation}/reject'
 */
export const reject = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/reservations/{reservation}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ReservationsController::reject
 * @see app/Http/Controllers/Admin/ReservationsController.php:180
 * @route '/admin/reservations/{reservation}/reject'
 */
reject.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReservationsController::reject
 * @see app/Http/Controllers/Admin/ReservationsController.php:180
 * @route '/admin/reservations/{reservation}/reject'
 */
reject.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ReservationsController::reject
 * @see app/Http/Controllers/Admin/ReservationsController.php:180
 * @route '/admin/reservations/{reservation}/reject'
 */
    const rejectForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ReservationsController::reject
 * @see app/Http/Controllers/Admin/ReservationsController.php:180
 * @route '/admin/reservations/{reservation}/reject'
 */
        rejectForm.post = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
export const inspectionComparison = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionComparison.url(args, options),
    method: 'get',
})

inspectionComparison.definition = {
    methods: ["get","head"],
    url: '/admin/reservations/{reservation}/inspection-comparison',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
inspectionComparison.url = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return inspectionComparison.definition.url
            .replace('{reservation}', parsedArgs.reservation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
inspectionComparison.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inspectionComparison.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
inspectionComparison.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inspectionComparison.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
    const inspectionComparisonForm = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inspectionComparison.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
        inspectionComparisonForm.get = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionComparison.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReturnInspectionController::inspectionComparison
 * @see app/Http/Controllers/Admin/ReturnInspectionController.php:169
 * @route '/admin/reservations/{reservation}/inspection-comparison'
 */
        inspectionComparisonForm.head = (args: { reservation: string | number | { id: string | number } } | [reservation: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inspectionComparison.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inspectionComparison.form = inspectionComparisonForm
const reservations = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
print: Object.assign(print, print),
approve: Object.assign(approve, approve),
reject: Object.assign(reject, reject),
inspectionComparison: Object.assign(inspectionComparison, inspectionComparison),
}

export default reservations