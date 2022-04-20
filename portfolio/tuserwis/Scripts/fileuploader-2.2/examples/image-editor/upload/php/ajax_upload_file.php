<?php
    include('../../../../src/php/class.fileuploader.php');

	$isAfterEditing = false;

	// if after editing
	if (isset($_POST['fileuploader']) && isset($_POST['_editorr'])) {
		$isAfterEditing = true;
	}
	
	// initialize FileUploader
    $FileUploader = new FileUploader('files', array(
        'limit' => 1,
		'fileMaxSize' => null,
		'extensions' => ['image/*'],
        'uploadDir' => '../uploads/',
        'title' => 'name',
		'replace' => $isAfterEditing,
		'editor' => array(
			'maxWidth' => 1280,
			'maxHeight' => 720,
			'crop' => false,
			'quality' => 90
		),
    ));
	
	// call to upload the files
    $upload = $FileUploader->upload();

	// change file's public data
    if (!empty($upload['files'])) {
        $item = $upload['files'][0];
        
        $upload['files'][0] = array(
            'title' => $item['title'],
            'name' => $item['name'],
            'size' => $item['size'],
            'size2' => $item['size2']
        );
    }

	// export to js
    header('Content-Type: application/json');
	echo json_encode($upload);
	exit;