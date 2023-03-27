function getVideo(videoId){
    var feedback = 'success'
    try{
        document.write('Title: ' + video[videoId]['Title'] + '<hr />')
        document.write('Category: ' + video[videoId]['Tag'] + '<hr />') 
    } catch(error){
        errorRegister(error)
        document.write('Video não indisponível.')
        feedback = 'fail'
    } finally{
        console.log(feedback)
    }
}
function errorRegister(error){
    var errorType = error
    console.log(errorType)
}
function addVideo(title, tag){
    
    var i = video.length

    video[i] = []
    video[i]['Title'] = title
    video[i]['Tag'] = tag

    console.log(video)
}

var video = []
video[1] = []
video[1]['Title'] = 'JoJo'
video[1]['Tag'] = 'Anime'

addVideo('Initial D', 'Anime')
getVideo(1)