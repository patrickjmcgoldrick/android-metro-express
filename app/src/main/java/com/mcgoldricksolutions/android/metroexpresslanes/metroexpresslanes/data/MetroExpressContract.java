package com.mcgoldricksolutions.android.metroexpresslanes.metroexpresslanes.data;

import android.content.ContentUris;
import android.net.Uri;
import android.provider.BaseColumns;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by dirtbag on 8/23/14.
 */
public class MetroExpressContract {



    // Name for content provider.
    public static final String CONTENT_AUTHORITY = "com.mcgoldricksolutions.android.metroexpresslanes";

    // Base of all URIs which apps use to contact the content provider.
    public static final Uri BASE_CONTENT_URI = Uri.parse("content://" + CONTENT_AUTHORITY);


    public static final String PATH_TRIP = "trip";
    public static final String PATH_CATEGORY = "category";

    public static final String DATE_FORMAT = "yyyyMMdd";

    public static String getDbDateString(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
        return sdf.format(date);
    }

    /**
     * Converts a dateText to a long Unix time representation
     * @param dateText the input date string
     * @return the Date object
     */
    public static Date getDateFromDb(String dateText) {
        SimpleDateFormat dbDateFormat = new SimpleDateFormat(DATE_FORMAT);
        try {
            return dbDateFormat.parse(dateText);
        } catch ( ParseException e ) {
            e.printStackTrace();
            return null;
        }
    }


    public static final class TripEntry implements BaseColumns {

        public static final Uri CONTENT_URI =
                BASE_CONTENT_URI.buildUpon().appendPath(PATH_TRIP).build();

        public static final String CONTENT_TYPE =
                "vnd.android.cursor.dir/" + CONTENT_AUTHORITY + "/" + PATH_TRIP;
        public static final String CONTENT_ITEM_TYPE =
                "vnd.android.cursor.item/" + CONTENT_AUTHORITY + "/" + PATH_TRIP;

        public static final String TABLE_NAME = "trip";

        public static final String COLUMN_DATE_TX = "date_tx";
        public static final String COLUMN_DATE_POSTED = "date_posted";

        // Transponder/Plate
        public static final String COLUMN_TRANSPONDER_PLATE_NUMBER = "transponder_plate";

        // agency
        public static final String COLUMN_AGENCY = "agency";

        // activity
        public static final String COLUMN_ACTIVITY = "activity";

        public static final String COLUMN_ENTRY_TIME = "time_entry";
        public static final String COLUMN_ENTRY_PLAZA = "plaza_entry";
        public static final String COLUMN_EXIT_TIME = "time_exit";
        public static final String COLUMN_EXIT_PLAZA = "plaza_exit";

        public static final String COLUMN_AMOUNT = "amount";

        public static final String COLUMN_HOV_SOV = "hov_sov";

        // id into the category table
        public static final String COLUMN_CATEGORY_KEY = "category_id";

        public static final String COLUMN_NOTE = "note";

        // Helper functions
        public static Uri buildTripUri(long id) {
            return ContentUris.withAppendedId(CONTENT_URI, id);
        }


    }

    public static final class CategoryEntry implements BaseColumns {

        public static final Uri CONTENT_URI =
                BASE_CONTENT_URI.buildUpon().appendPath(PATH_CATEGORY).build();

        public static final String CONTENT_TYPE =
                "vnd.android.cursor.dir/" + CONTENT_AUTHORITY + "/" + PATH_CATEGORY;
        public static final String CONTENT_ITEM_TYPE =
                "vnd.android.cursor.item/" + CONTENT_AUTHORITY + "/" + PATH_CATEGORY;

        public static final String TABLE_NAME = "category";

        public static final String COLUMN_DATE_CREATED = "date_created";

        // activity
        public static final String COLUMN_NAME = "name";
        public static final String COLUMN_DESC = "description";



        // Helper functions
        public static Uri buildCategoryUri(long id) {
            return ContentUris.withAppendedId(CONTENT_URI, id);
        }


    }
}
