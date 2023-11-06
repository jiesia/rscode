use std::{
    fs,
    path::{Path, PathBuf},
};

use serde::{Deserialize, Serialize};

use crate::error::Error;

#[derive(Debug, Serialize, Deserialize)]
pub enum FileTree {
    File {
        path: PathBuf,
    },
    Directory {
        path: PathBuf,
        children: Vec<FileTree>,
    },
}

#[tauri::command]
pub fn read_file_tree(path: &Path) -> Result<FileTree, Error> {
    if path.is_dir() {
        let mut children = vec![];
        for child in fs::read_dir(&path)? {
            let child = child?;
            let child_path = child.path();
            let child_path_str = child_path.to_string_lossy().to_string();

            if child_path_str.contains(".git") || child_path_str.contains("node_modules") {
                continue;
            }

            children.push(read_file_tree(&child_path)?);
        }
        Ok(FileTree::Directory {
            path: path.to_path_buf(),
            children,
        })
    } else {
        Ok(FileTree::File {
            path: path.to_path_buf(),
        })
    }
}
