console.log('parameter decorator in type script')

type WatchedParameter = {
    methodName: string, 
    parmeterIndex: number
}

const watchedParameters: WatchedParameter[] = []

function Watch (target: any, methodName: string, parmeterIndex: number  ) {
    watchedParameters.push({
        methodName, 
        parmeterIndex
    });
    target
}


class vehicle {
    move(@Watch speed: number){speed;}

}

new vehicle()
console.log(watchedParameters)