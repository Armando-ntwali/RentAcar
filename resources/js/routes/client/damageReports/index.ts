import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/client/damage-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Client\DamageReportController::index
 * @see app/Http/Controllers/Client/DamageReportController.php:17
 * @route '/client/damage-reports'
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
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
export const show = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/client/damage-reports/{damageReport}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
show.url = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{damageReport}', parsedArgs.damageReport.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
show.get = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
show.head = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
    const showForm = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
        showForm.get = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Client\DamageReportController::show
 * @see app/Http/Controllers/Client/DamageReportController.php:39
 * @route '/client/damage-reports/{damageReport}'
 */
        showForm.head = (args: { damageReport: string | number | { id: string | number } } | [damageReport: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const damageReports = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default damageReports